import express from 'express';
import {
  createTechnique,
  getTechniques,
  getTechniqueById,
  updateTechnique,
  deleteTechnique
} from '../controllers/techniqueController.js';

const techniquesrouter = express.Router();
techniquesrouter.post('/create-techniqie/', createTechnique);
techniquesrouter.get('/get-technique/', getTechniques);
techniquesrouter.get('/get-tehnique/:id', getTechniqueById);
techniquesrouter.put('/update-technique/:id', updateTechnique);
techniquesrouter.delete('/delete-technique/:id', deleteTechnique);

export default techniquesrouter;
