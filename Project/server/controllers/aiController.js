import GeminiService from '../services/geminiService.js';
import dotenv from 'dotenv';
dotenv.config();
// Use environment variables for API key
const apiKey = process.env.GEMINI_API_KEY;
const geminiService = new GeminiService(apiKey);

export const generateLegalResponse = async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }
    
    const response = await geminiService.generateResponse(query);
    res.json({ response });
  } catch (error) {
    console.error('Error in AI controller:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};