import { Router, Request, Response } from "express";
import multer from "multer";
import { verifyToken } from "../../middlewares/auth";
import Hotel from "../../models/hotel.model";
import { uploadImages } from "../../utils/upload";
import logger from "../../utils/logger";
import { HotelType } from "../../shared/types";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

/**
 * CREATING HOTEL
 * POST /api/host/hotels/
 */
router.post(
  "/",
  verifyToken,
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }

      const imageFiles = req.files as Express.Multer.File[];
      const newHotel: HotelType = req.body;

      const imageUrls = await uploadImages(imageFiles);

      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      const hotel = new Hotel(newHotel);
      await hotel.save();

      return res.status(201).json(hotel);
    } catch (e) {
      logger.error(e);
      return res.status(500).json({ message: "Internal sever error" });
    }
  }
);

/**
 * GETTING ALL HOTELS
 * GET /api/host/hotels/
 */
router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find({ userId: req.userId });
    res.json(hotels);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

/**
 * GETTING HOTEL BY USER ID
 * GET /api/host/hotels/:id
 */
router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const hotel = await Hotel.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(hotel);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Error fetching hotel" });
  }
});

/**
 * UPDATING HOTEL BY ID
 * GET /api/host/hotels/:hotelId
 */
router.put(
  "/:hotelId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedHotel: HotelType = req.body;
      updatedHotel.lastUpdated = new Date();

      const hotel = await Hotel.findOneAndUpdate(
        {
          _id: req.params.hotelId,
          userId: req.userId,
        },
        updatedHotel,
        { new: true }
      );

      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      hotel.imageUrls = [
        ...updatedImageUrls,
        ...(updatedHotel.imageUrls || []),
      ];

      await hotel.save();
      res.status(201).json(hotel);
    } catch (e) {
      logger.error(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

export default router;
