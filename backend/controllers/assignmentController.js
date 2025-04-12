import Assessment from "../models/Assignment";

// Create an assessment
export const createAssessment = async (req, res) => {
  try {
    const { moduleId, questions } = req.body;

    const newAssessment = new Assessment({ moduleId, questions });
    await newAssessment.save();

    res.status(201).json(newAssessment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create assessment", details: error.message });
  }
};

// Get all assessments
export const getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find().populate("moduleId");
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assessments" });
  }
};

// Get assessment by ID
export const getAssessmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const assessment = await Assessment.findById(id).populate("moduleId");
    if (!assessment) return res.status(404).json({ error: "Assessment not found" });
    res.status(200).json(assessment);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving assessment" });
  }
};

// Update assessment
export const updateAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAssessment = await Assessment.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAssessment) return res.status(404).json({ error: "Assessment not found" });
    res.status(200).json(updatedAssessment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update assessment" });
  }
};

// Delete assessment
export const deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Assessment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Assessment not found" });
    res.status(200).json({ message: "Assessment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete assessment" });
  }
};
