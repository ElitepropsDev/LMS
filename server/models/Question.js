import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    subject: { type: String, required: true, index: true }, // e.g., "Mathematics"
    questionText: { type: String, required: true },
    options: [
        { text: { type: String, required: true }, isCorrect: { type: Boolean, default: false } }
    ],
    explanation: { type: String }, // Why the answer is correct
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
}, { timestamps: true });

const Question = mongoose.model("Question", questionSchema);
export default Question;