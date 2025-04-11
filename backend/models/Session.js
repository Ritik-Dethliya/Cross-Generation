import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
    mentorId: String,
    learnerId: String,
    scheduledAt: Date,
    durationMinutes: Number,
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled"
    },
    notes: String
  });
  
  export default mongoose.model("Session", sessionSchema);
  