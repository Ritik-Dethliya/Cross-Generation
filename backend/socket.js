import { Server } from "socket.io";

//console.log(Server)
export default function setupSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("🔌 New socket:", socket.id);

    socket.on("join", (sessionId) => {
      socket.join(sessionId);
      console.log(`👥 Socket ${socket.id} joined room ${sessionId}`);
      socket.to(sessionId).emit("user-joined");
    });

    socket.on("offer", ({ roomId, offer }) => {
      socket.to(roomId).emit("offer", { offer });
    });

    socket.on("answer", ({ roomId, answer }) => {
      socket.to(roomId).emit("answer", { answer });
    });

    socket.on("ice-candidate", ({ roomId, candidate }) => {
      socket.to(roomId).emit("ice-candidate", { candidate });
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
}
