import express from "express";
import {
  createAssessment,
  getAllAssessments,
  getAssessmentById,
  updateAssessment,
  deleteAssessment,
} from "../controllers/assignmentController.js";

const assignmentsrouter = express.Router();

assignmentsrouter.post("/", createAssessment);
assignmentsrouter.get("/", getAllAssessments);
assignmentsrouter.get("/:id", getAssessmentById);
assignmentsrouter.put("/:id", updateAssessment);
assignmentsrouter.delete("/:id", deleteAssessment);

export default assignmentsrouter;
