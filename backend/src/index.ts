import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import logger from "./utils/logger";
import connect from "./utils/connect";

import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user/user.route";
import hostHotelRoutes from "./routes/host/hotel.route";
import adminRoutes from "./routes/admin/admin.route";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

/** AUTHENTICATION ROUTES */
app.use("/api/auth", authRoutes);

/** USER ROUTES */
app.use("/api/user", userRoutes);

/** HOST ROUTES */
app.use("/api/host/hotels", hostHotelRoutes);

/** ADMIN ROUTES */
app.use("/api/admin", adminRoutes);

app.listen(PORT, async () => {
  logger.info(`server running on http://localhost:${PORT}`);
  await connect();
});
