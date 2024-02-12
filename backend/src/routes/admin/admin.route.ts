import { Request, Response, Router } from "express";
import User from "../../models/user.model";
import logger from "../../utils/logger";

const router = Router();

/**
 * Admin approves or reject host request of a user
 * POST /admin/approve-host/:userId
 */
router.post("/approve-host/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { decision } = req.body;

  if (!decision || (decision !== "approve" && decision !== "reject")) {
    return res.status(400).json({ message: "Invalid decision" });
  }

  try {
    const update: any = {
      "hostDetails.requestStatus":
        decision === "approve" ? "approved" : "rejected",
    };

    if (decision === "approve") {
      update.role = "Host";
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: update },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: `User request ${
        decision === "approve" ? "approved" : "rejected"
      } successfully`,
      user: updatedUser,
    });
  } catch (e: any) {
    logger.error(e);
    return res.status(500).json("Internal sever error");
  }
});

/**
 * Admin views host requests
 * GET /admin/host-requests
 */
router.get("/host-requests", async (req: Request, res: Response) => {
  try {
    // Find users with host request pending
    const hostRequests = await User.find({
      "hostDetails.requestStatus": "pending",
    });

    return res.status(200).json({ hostRequests });
  } catch (e: any) {
    logger.error(e);
    return res.status(500).json("Internal server error");
  }
});

export default router;
