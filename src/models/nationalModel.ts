import mongoose, { Schema, Types } from "mongoose";

interface INationalDb {
  email: string;
  playerName: string;
  fatherName: string;
  dob: Date;
  mobileNumber: string;
  gender: string;
  category: string;
  weight: string;
  coachName: string;
  district: string;
  state: string;
  playedNinjaEvent: boolean;
  adharFront: string;
  adharBack: string;
  photo: string;
}

const nationalSchema = new Schema<INationalDb>({
  email: { type: String, unique: true },
  playerName: { type: String },
  fatherName: { type: String },
  dob: { type: Date },
  mobileNumber: { type: String },
  gender: { type: String },
  category: { type: String },
  weight: { type: String },
  coachName: { type: String },
  district: { type: String },
  state: { type: String },
  playedNinjaEvent: { type: Boolean },
  adharFront: { type: String },
  adharBack: { type: String },
  photo: { type: String },
});

const National =
  mongoose.models.National || mongoose.model("National", nationalSchema);

export default National;
