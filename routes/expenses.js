const express = require('express');
const router = express.Router();
const { Expense } = require('../models'); // Adjust the path if needed

// Add expense route
router.post('/expenses', async (req, res) => {
    const { amount, description, userId } = req.body;

    try {
        // Create a new expense
        const expense = await Expense.create({ amount, description, userId });
        res.status(201).json({ message: 'Expense added successfully', expense });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// View expenses route
router.get('/expenses', async (req, res) => {
    try {
        // Get all expenses
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
