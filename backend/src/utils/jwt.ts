import jwt from "jsonwebtoken";

export const generateToken = function (userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: process.env.JWT_EXPIRE as string,
  });
};
