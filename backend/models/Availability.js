import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  mentorId: String,
  availableSlots: [
    {
      start: Date,
      end: Date
    }
  ]
});

export default mongoose.model("Availability", availabilitySchema);
