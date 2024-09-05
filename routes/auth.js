const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); // Adjust the path as needed


// Register route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Received registration request with username: ${username}`);

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(`Hashed password: ${hashedPassword}`);

        // Create a new user
        const user = await User.create({
            username,
            password: hashedPassword
        });

        console.log('User registered successfully', user);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ where: { username } });

        // If user not found
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.jwt_secret, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
});

// Register route



module.exports = router;
