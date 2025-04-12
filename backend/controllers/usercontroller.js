import User from '../models/user.model.js';

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { role } = req.query;
    const query = role ? { role } : {};
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).send({"err":"user not Found"})
  }
  
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).send({"err":"user not Found"})
  }
  
};

export const updateUser = async (req, res) => {
  //console.log("here",req.params.id)
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({user});
  } catch (error) {
    
    console.log(error)
    res.status(500).json({"msg":"error Occured"})
  }
};

export const getMentors=async(req,res)=>{
  try {
    const mentors = await User.find({role:"mentor"});
    if (!mentors) return res.status(404).json({ error: 'User not found' });
    res.json(mentors);
  } catch (error) {
    console.log(error)
    res.status(500).send({"err":"user not Found"})
  }
}

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};
