import { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import multer from "multer";
import { verifyToken } from "../../middlewares/auth";
import { createHotelSchema } from "../../schemas/hotel.schema";
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
  checkSchema(createHotelSchema),
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    try {
      const newHotel: HotelType = req.body;

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

export default router;
