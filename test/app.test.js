import assert from 'assert'; // Using built-in Node.js assert
import axios from 'axios'; // Axios to make HTTP requests
import app from '../app.js'; // Your app
import db from '../models/index.js'; // Your database models

const { User } = db;

describe('API Tests', function() {
  this.timeout(10000); // Increase timeout to 10 seconds

  let server; // Will hold the server instance
  let token;  // JWT token

  // Start the server before the tests
  before(function(done) {
    server = app.listen(4000, () => {
      console.log('Test server running on port 4000');
      done();
    });
  });

  // Close the server after tests
  after(function(done) {
    server.close(() => {
      console.log('Test server stopped');
      done();
    });
  });

  // Test user registration
  it('should register a user', async function() {
    const res = await axios.post('http://localhost:4000/api/register', {
      username: 'testuser',
      password: 'testpass'
    });
    
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.message, 'User registered successfully');
  });

  // Test user login
  it('should login a user', async function() {
    const res = await axios.post('http://localhost:4000/api/login', {
      username: 'testuser',
      password: 'testpass'
    });

    assert.strictEqual(res.status, 200);
    assert(res.data.token); // Check if token exists
    token = res.data.token; // Save token for future tests
  });

  // Test adding an expense
  it('should add an expense', async function() {
    const res = await axios.post('http://localhost:4000/api/expenses', {
      amount: 100,
      description: 'Lunch'
    }, {
      headers: {
        Authorization: `Bearer ${token}` // Include JWT token
      }
    });

    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.message, 'Expense added');
  });

  // Test viewing expenses
  it('should view expenses', async function() {
    const res = await axios.get('http://localhost:4000/api/expenses', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    assert.strictEqual(res.status, 200);
    assert(Array.isArray(res.data)); // Ensure the response is an array
  });
});
