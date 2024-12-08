import mongoose from "mongoose";
const attemptsSchema = new mongoose.Schema(
 {
   user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   attemptNum: Number,
   answers: [String],
   score: Number,
 },
 { collection: "attempts" }
);
export default attemptsSchema;