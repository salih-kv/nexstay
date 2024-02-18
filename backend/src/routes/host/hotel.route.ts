import { Router, Request, Response } from "express";
import multer from "multer";
import { verifyToken } from "../../middlewares/auth";
import Hotel, { HotelType } from "../../models/hotel.model";
import { uploadImages } from "../../utils/upload";
import logger from "../../utils/logger";

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
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

export default router;
