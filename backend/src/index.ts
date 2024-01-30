import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import logger from "./utils/logger";
import connect from "./utils/connect";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "hello from nexstay endpoint!" });
});

app.listen(PORT, async () => {
  logger.info(`server running on http://localhost:${PORT}`);
  await connect();
});
