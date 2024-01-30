import mongoose from "mongoose";
import logger from "./logger";

const connect = async () => {
  const dbUri = process.env.MONGODB_CONNECTION_STRING as string;

  try {
    await mongoose.connect(dbUri);
    logger.info("connected to DB");
  } catch (err) {
    logger.error("could not connect to DB", err);
    process.exit(1);
  }
};

export default connect;
