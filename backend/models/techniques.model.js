import mongoose from 'mongoose';

const techniqueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  description: String,
  videoURL: String,
  documentation: {
    text: String,
    model3DURL: String,
    images: [String],
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  aiGuide: String,
}, { timestamps: true });

export default mongoose.model('Technique', techniqueSchema);
