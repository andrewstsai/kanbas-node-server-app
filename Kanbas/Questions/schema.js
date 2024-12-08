import mongoose from "mongoose";
const questionsSchema = new mongoose.Schema(
 {
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   type: {
    type: String,
    enum: ["MULTIPLECHOICE", "TRUEFALSE", "FILLINBLANK"],
    default: "MULTIPLECHOICE",
   },
   title: String,
   points: Number,
   description: String,
   choices: [String],
   correct: [String],
 },
 { collection: "questions" }
);
export default questionsSchema;