import mongoose from "mongoose";
import { hash } from "bcryptjs";

export type userType = {
  email: string;
  name: string;
  password: string;
};

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

const User = mongoose.model<userType>("User", userSchema);

export default User;
