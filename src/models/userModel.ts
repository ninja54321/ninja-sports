import mongoose, { Schema, Types } from "mongoose";

interface UserDb {
  _id: Types.ObjectId;
  active: boolean;
  email: string;
  hashedPassword: string;
  imageUrl?: string;
  mobileNumber?: string;
  name: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordOTP: string | undefined;
  forgotPasswordOTPExpiry: Date | undefined;
  verifyOTP: string | undefined;
  verifyOTPExpiry: Date | undefined;
}

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, "Please provide a username"],
//   },
//   email: {
//     type: String,
//     required: [true, "Please provide a email"],
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, "Please provide a password"],
//   },
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
//   forgotPasswordToken: String,
//   forgotPasswordTokenExpiry: Date,
//   verifyToken: String,
//   verifyTokenExpiry: Date,
// });

const userSchema = new Schema<UserDb>(
  {
    active: { type: Boolean, required: true, default: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    hashedPassword: {
      type: String,
      required: [true, "Password is required"],
    },
    imageUrl: { type: String, default: null },
    mobileNumber: {
      type: String,
      default: null,
    },
    name: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    forgotPasswordOTP: { type: String },
    forgotPasswordOTPExpiry: { type: Date },
    verifyOTP: { type: String },
    verifyOTPExpiry: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
