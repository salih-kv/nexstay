import { Router, Request, Response } from "express";
import { param, validationResult } from "express-validator";
import Hotel from "../../models/hotel.model";
import logger from "../../utils/logger";
import { HotelSearchResponse } from "../../shared/types";

const router = Router();

/**
 * GETTING ALL HOTELS
 * GET /api/hotels/
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find().sort("-lastUpdated");
    res.json(hotels);
  } catch (e) {
    logger.error("error", e);
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

/**
 * GETTING HOTEL BY HOTEL ID
 * GET /api/hotels/:hotelId
 */
router.get(
  "/:hotelId",
  [param("hotelId").notEmpty().withMessage("Hotel ID is required")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hotelId = req.params.hotelId.toString();

    try {
      const hotel = await Hotel.findById(hotelId);
      res.json(hotel);
    } catch (e: any) {
      logger.error(e);
      res.status(500).json({ message: "Error fetching hotel" });
    }
  }
);

export default router;
