import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import userModel from './user.js';
import expenseModel from './expense.js';

const environment = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[environment]);

const db = {
  Sequelize,
  sequelize,
  User: userModel(sequelize, Sequelize),
  Expense: expenseModel(sequelize, Sequelize),
};

export default db;
