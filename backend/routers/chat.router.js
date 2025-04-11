import express from "express";
import { sendMessage, getMessages } from "../controllers/chatController.js";

const chatrouter = express.Router();

chatrouter.post("/", sendMessage);
chatrouter.get("/:user1/:user2", getMessages);

export default chatrouter;
