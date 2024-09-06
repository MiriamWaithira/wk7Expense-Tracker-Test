import express from 'express';
import { addExpense, getExpenses } from '../controllers/expenseController.js';
import auth from '../middleware/authMiddleware.js'; // Assuming JWT auth middleware

const router = express.Router();

router.post('/expenses', auth, addExpense);
router.get('/expenses', auth, getExpenses);

export default router;
