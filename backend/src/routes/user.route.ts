import { Request, Response, Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import logger from "../utils/logger";
import verifyToken from "../middlewares/auth";
import { createUserSchema } from "../schemas/user.schema";

const router = Router();

// /api/users/me
router.get("/me", verifyToken, async (req: Request, res: Response) => {
  const { userId } = req;
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.json(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(500).send({ message: "Internal sever error" });
  }
});

// /api/users/register
router.post(
  "/register",
  checkSchema(createUserSchema),
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ message: result.array() });
    }

    const { email } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = await User.create(req.body);

      const token = jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000, // 1d
      });

      return res.status(200).send({ message: "User registered OK" });
    } catch (e: any) {
      logger.error(e);
      return res.status(409).send({ message: "Something went wrong" }); // 409 - conflict
    }
  }
);

export default router;
