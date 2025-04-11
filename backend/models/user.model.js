import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: ['mentor', 'learner'], required: true },
        bio: { type: String },
        skills: [String],
        availability: {
          type: [String],
        },
      }, { timestamps: true }
)
export default mongoose.model('User', userSchema);