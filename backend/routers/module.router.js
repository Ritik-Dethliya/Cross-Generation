import express from "express";
import {
  createModule,
  getModules,
  trackProgress,
  submitAssessment
} from "../controllers/moduleController.js";

const modulerouter = express.Router();

modulerouter.post("/", createModule);
modulerouter.get("/", getModules);
modulerouter.post("/progress/:userId/:moduleId", trackProgress);
modulerouter.post("/assessment/:moduleId", submitAssessment);

export default modulerouter;
