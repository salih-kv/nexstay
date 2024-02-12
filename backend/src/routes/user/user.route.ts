import { Request, Response, Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import User from "../../models/user.model";
import logger from "../../utils/logger";
import { verifyToken } from "../../middlewares/auth";
import { createUserSchema } from "../../schemas/user.schema";
import { generateToken } from "../../utils/jwt";

const router = Router();

/**
 * /api/user/register
 */
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

      const token = generateToken(newUser.id);

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000, // 1d
      });

      return res.status(200).json({ message: "User registered OK" });
    } catch (e: any) {
      logger.error(e);
      return res.status(409).json({ message: "Something went wrong" }); // 409 - conflict
    }
  }
);

/**
 * /api/user/me
 */
router.get("/me", verifyToken, async (req: Request, res: Response) => {
  const { userId } = req;
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(500).json({ message: "Internal sever error" });
  }
});

/**
 * Update user role to host
 * POST /api/user/request-host
 */
router.post(
  "/request-host",
  verifyToken,
  async (req: Request, res: Response) => {
    const { userId } = req;
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: { "hostDetails.requestStatus": "pending" } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res
        .status(200)
        .json({ message: "Host request sent successfully" });
    } catch (e: any) {
      logger.error(e);
      return res.status(500).json("Internal sever error");
    }
  }
);

export default router;
