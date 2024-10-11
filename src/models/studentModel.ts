import mongoose, { Schema, Types } from "mongoose";

// interface ICertificate {
//   certificateNumber: string;
//   certificateName: string;
//   certificateLink: string;
//   award: string;
//   position: string;
//   designation: string;
//   eventVenue: string;
//   eventDate: Date;
// }

// const certificateSchema = new Schema<ICertificate>({
//   certificateNumber: { type: String },
//   certificateName: { type: String },
//   certificateLink: { type: String },
//   award: { type: String },
//   position: { type: String },
//   designation: { type: String },
//   eventVenue: { type: String },
//   eventDate: { type: Date },
// });

// interface IStudentDb {
//   _id: Types.ObjectId;
//   title: string;
//   registrationNumber: string;
//   dob: Date;
//   fullName: string;
//   ageCategory: string;
//   user: Types.ObjectId | null;
//   fatherName: string;

//   email: string;
//   mobileNumber: string;
//   whatsAppNumber: string;
//   gender: string;
//   address: string;
//   fatherOccupation: string;
//   active: boolean;

//   qualification: string;
//   state: string;
//   district: string;
//   sportsExperience: string;
//   optionToLearn: string[];
//   consent: string;
//   blackCourse: boolean;
//   img: string;
//   starRating: string;
//   category: string;
//   photo: any;
//   club: string;
//   academy: string;
//   school: string;
//   // certificates: ICertificate[];
// }

const eventSchema = new Schema({
  event: String,
  certificateNumber: String,
  certificateName: String,
  certificateLink: String,
  weightCategory: String,
  ageCategory: String,
  position: String,
  award: String,
  eventState: String,
  eventDistrict: String,
  eventSchool: String,
  eventAcademy: String,
  designation: String,
  eventVenue: String,
  eventDate: Date,
});

const studentSchema = new Schema({
  // 1st field
  user: { type: Schema.Types.ObjectId, ref: "User" },
  active: { type: Boolean, required: true, default: true },
  registrationNumber: { type: String, unique: true },
  title: String,
  fullName: String,
  fatherName: String,
  dob: Date,
  gender: String,
  state: String,
  district: String,
  institute: String,
  mobileNumber: String,
  address: String,
  referenceCoachName: String,
  designation: String,
  joiningDate: Date,
  expiryDate: Date,
  photo: String,

  whatsAppNumber: String,
  qualification: String,
  email: String,
  fatherOccupation: String,
  sportsExperience: String,
  optionToLearn: [{ type: String }],
  consent: String,
  blackCourse: String,
  // img: String,
  starRating: String,

  // 2nd field
  // certificates: [certificateSchema],
  events: [eventSchema],
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
