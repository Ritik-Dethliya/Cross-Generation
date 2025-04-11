import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/usercontroller.js';

const userrouter = express.Router();

userrouter.post('/create-user/', createUser);
userrouter.get('/get-user/', getUsers);
userrouter.get('/get-user/:id', getUserById);
userrouter.put('/update-user/:id', updateUser);
userrouter.delete('/delete-user/:id', deleteUser);

export default userrouter;
