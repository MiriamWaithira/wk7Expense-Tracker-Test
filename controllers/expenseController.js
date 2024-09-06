import Expense from '../models/expense.js';

export const addExpense = async (req, res) => {
  try {
    const { amount, description } = req.body;
    const expense = await Expense.create({ amount, description });
    res.status(201).json({ message: 'Expense added', expense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
