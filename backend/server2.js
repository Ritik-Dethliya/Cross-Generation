import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config.db.js';
import userRoutes from './routers/user.routers.js';
import Availabilityrouter from './routers/availability.router.js';
import chatrouter from './routers/chat.router.js';
import modulerouter from'./routers/module.router.js'
import sessionrouter from './routers/session.router.js';
import techniquesrouter from './routers/techniques.router.js';
import userrouter from './routers/user.routers.js';
import setupSocket from './socket.js'
import http from 'http';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

connectDB();

app.use('/users/', userRoutes);
app.use('/techniques/',techniquesrouter);
app.use('/availability/',Availabilityrouter);
app.use('/chat/',chatrouter);
app.use('/moduls/',modulerouter);
app.use('/session/',sessionrouter);
app.use('/techniques/',techniquesrouter);
app.use('/user',userrouter)

setupSocket(server)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 User-service running on port ${PORT}`));
