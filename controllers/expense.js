const { Expense } = require('../models');

exports.addExpense = async (req, res) => {
  const { amount, description } = req.body;
  try {
    const expense = await Expense.create({
      amount,
      description,
      userId: req.user.id // Use JWT to get user ID
    });
    res.status(201).json({ message: 'Expense added', expense });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ where: { userId: req.user.id } });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
