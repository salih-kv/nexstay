import mongoose from "mongoose";
import { hash } from "bcryptjs";
import { UserType } from "../shared/types";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: [true, "Email already exists"],
    },
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: [6, "Password must be of minimum 6 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["User", "Host", "Admin"],
      default: "User",
      required: true,
    },
    hostDetails: {
      requestStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
  next();
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
