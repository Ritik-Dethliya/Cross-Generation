import Technique from '../models/techniques.model.js';
import { generateGuideFromAI } from '../ai/generateGuide.js'; // optional AI

export const createTechnique = async (req, res) => {
  try {
    const { title, description, documentation, createdBy } = req.body;

    // Generate guide using AI
    const aiGuide = await generateGuideFromAI(title, description);

    const newTechnique = await Technique.create({
      ...req.body,
      aiGuide,
    });

    res.status(201).json(newTechnique);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

export const getTechniques = async (req, res) => {
  try {
    const techniques = await Technique.find().populate('createdBy', 'name role');
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

export const getTechniqueById = async (req, res) => {
  const technique = await Technique.findById(req.params.id).populate('createdBy');
  if (!technique) return res.status(404).json({ error: 'Technique not found' });
  res.json(technique);
};

export const updateTechnique = async (req, res) => {
  const technique = await Technique.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(technique);
};

export const deleteTechnique = async (req, res) => {
  await Technique.findByIdAndDelete(req.params.id);
  res.json({ message: 'Technique deleted' });
};
