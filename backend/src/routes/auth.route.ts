import { Request, Response, Router } from "express";
import { check, validationResult } from "express-validator";
import { compare } from "bcryptjs";
import User from "../models/user.model";
import logger from "../utils/logger";
import { generateToken } from "../utils/jwt";
import { verifyToken } from "../middlewares/auth";

const router = Router();

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Must be a valid email and is required").isEmail(),
    check(
      "password",
      "Password must be at least 5 characters with a max of 32 characters"
    ).isLength({
      min: 6,
      max: 32,
    }),
  ],
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ message: result.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const isMatch = await compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const token = generateToken(user.id);

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res.status(200).json({ userId: user._id });
    } catch (e: any) {
      logger.error(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/auth/validate-token
router.get(
  "/validate-token",
  verifyToken,
  async (req: Request, res: Response) => {
    res.status(200).json({ userId: req.userId });
  }
);

// /api/auth/logout
router.post("/logout", async (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
});

export default router;
