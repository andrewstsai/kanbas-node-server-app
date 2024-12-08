import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
 {
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   title: String,
   description: String,
   availability: {
    type: String,
    enum: ["CLOSED", "AVAILABLE", "NOTYETAVAILABLE"],
    default: "CLOSED",
   },
   dueDate: Date,
   availableFrom: Date,
   availableUntil: Date,
   points: Number,
   numQuestions: Number,
   score: Number,
   type: {
    type: String,
    enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
    default: "GRADED QUIZ",
   },
   group: {
    type: String,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    default: "QUIZZES",
   },
  limit: {
    type: Number,
    default: 20,
  },
  attempts: {
    type: Number,
    default: 1,
  },
  showCorrect: Boolean,
  accessCode: {
    type: String,
    default: "",
  },
  oneQuestion: {
    type: String,
    enum: ["YES", "NO"],
    default: "YES",
  },
  webcam: {
    type: String,
    enum: ["YES", "NO"],
    default: "NO",
  },
  lock: {
    type: String,
    enum: ["YES", "NO"],
    default: "NO",
  },
 },
 { collection: "quizzes" }
);
export default quizSchema;