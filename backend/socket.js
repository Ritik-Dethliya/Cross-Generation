import { Server } from "socket.io";

export default function setupSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("New socket:", socket.id);

    socket.on("join", (sessionId) => {
      socket.join(sessionId);
    });

    socket.on("message", ({ sessionId, senderId, content }) => {
      io.to(sessionId).emit("message", { senderId, content, timestamp: new Date() });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  });
}
