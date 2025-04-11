import express from "express";
import { createSession, getUserSessions } from "../controllers/sessionController.js";

const sessionrouter = express.Router();

sessionrouter.post("/create-session/", createSession);
sessionrouter.get("/get-session/:userId", getUserSessions);

export default sessionrouter;
