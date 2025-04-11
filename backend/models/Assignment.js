import mongoose from 'mongoose'
const assessmentSchema = new mongoose.Schema({
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module"
    },
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: Number // index of the correct option
      }
    ]
  });
  
  export default mongoose.model("Assessment", assessmentSchema);
  