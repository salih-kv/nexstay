import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import logger from "./utils/logger";
import connect from "./utils/connect";

import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

/** ROUTES */
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  logger.info(`server running on http://localhost:${PORT}`);
  await connect();
});
