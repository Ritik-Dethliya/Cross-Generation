import mongoose from 'mongoose'
const progressSchema = new mongoose.Schema({
    userId: String,
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module"
    },
    status: { type: String, enum: ["not_started", "in_progress", "completed"], default: "not_started" },
    completedAt: Date
  });
  
  export default mongoose.model("Progress", progressSchema);
  