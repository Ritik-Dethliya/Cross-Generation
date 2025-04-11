import express from "express";
import {
  setAvailability,
  getAvailability,
  clearAvailability,
} from "../controllers/availabilityController.js";

const Availabilityrouter = express.Router();

Availabilityrouter.post("/", setAvailability);
Availabilityrouter.get("/:mentorId", getAvailability);
Availabilityrouter.delete("/:mentorId", clearAvailability);

export default Availabilityrouter;
