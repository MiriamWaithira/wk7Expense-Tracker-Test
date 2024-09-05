const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Adjust the path as needed
const expenseRoutes = require('./routes/expenses'); // Add this line

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

// Register routes
app.use('/api', authRoutes); // Adjust the base path if needed
app.use('/api', expenseRoutes); // Add this line

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Adjust this if needed
  }
);

// Testing the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.log('Error: ' + err);
  });

app.listen(4000, () => console.log('Server running on port 4000'));


// const express = require('express');
// const { Sequelize } = require('sequelize');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth'); // Adjust the path to where your auth route is
// const config = require('./config/config'); // Ensure this path is correct

// dotenv.config();

// const app = express(); // Initialize app here

// // Middleware to parse request body
// app.use(express.json());

// // Register auth routes
// app.use('/api', authRoutes); // Note the prefix '/api'

// // Sequelize configuration
// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     dialect: config.development.dialect,
//   }
// );

// // Testing the database connection
// sequelize.authenticate()
//   .then(() => {
//     console.log('Database connected...');
//   })
//   .catch(err => {
//     console.log('Error: ' + err);
//   });

// app.listen(4000, () => console.log('Server running on port 4000'));
