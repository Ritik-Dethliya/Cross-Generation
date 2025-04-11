import Module from "../models/Module.js";
import Progress from "../models/Progess.js";
import Assessment from "../models/Assignment.js"; // Optional if you store assessments separately

// Create a new learning module
export const createModule = async (req, res) => {
  try {
    const newModule = new Module(req.body);
    const savedModule = await newModule.save();
    res.status(201).json(savedModule);
  } catch (error) {
    console.error("Create module error:", error.message);
    res.status(500).json({ error: "Module creation failed." });
  }
};

// Get all learning modules
export const getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    console.error("Get modules error:", error.message);
    res.status(500).json({ error: "Failed to fetch modules." });
  }
};

// Track user's progress on a module
export const trackProgress = async (req, res) => {
  const { userId, moduleId } = req.params;
  const { status } = req.body;

  try {
    const progress = await Progress.findOneAndUpdate(
      { userId, moduleId },
      { status, completedAt: status === "completed" ? new Date() : null },
      { upsert: true, new: true }
    );
    res.json(progress);
  } catch (error) {
    console.error("Track progress error:", error.message);
    res.status(500).json({ error: "Progress update failed." });
  }
};

// Submit assessment for a module
export const submitAssessment = async (req, res) => {
  const { moduleId } = req.params;
  const { userId, answers } = req.body;

  try {
    const newAssessment = new Assessment({
      moduleId,
      userId,
      answers,
      submittedAt: new Date(),
    });

    const saved = await newAssessment.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Submit assessment error:", error.message);
    res.status(500).json({ error: "Assessment submission failed." });
  }
};
