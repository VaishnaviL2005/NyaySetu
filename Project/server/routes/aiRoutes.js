import express from 'express';
import * as aiController from '../controllers/aiController.js';

const router = express.Router();

router.post('/legal-assistance', aiController.generateLegalResponse);

export default router;