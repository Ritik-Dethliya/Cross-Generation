import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String, // Markdown / HTML
  mediaUrls: [String],
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assessment"
  }
});

export default mongoose.model("Module", moduleSchema);
