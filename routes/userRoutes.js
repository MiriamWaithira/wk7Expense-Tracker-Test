import express from 'express';
import { register, login } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      // Your registration logic here
    } catch (error) {
      console.error('Error in /register route:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  
router.post('/expenses', async (req, res) => {
    try {
      // Your expense addition logic here
    } catch (error) {
      console.error('Error in /expenses route:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

export default router;
