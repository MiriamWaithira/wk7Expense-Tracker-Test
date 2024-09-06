import { DataTypes } from 'sequelize';
import sequelize from './db'; // Your sequelize instance

const Expense = sequelize.define('Expense', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Users', // Ensure this matches your table name
      key: 'id'
    }
  }
});

export default Expense;
