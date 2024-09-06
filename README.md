# wk7Expense-Tracker-Test
This is an attempt to test and debug an expense tracker application

# Steps undertaken in Creating the Application
1. Create your project directory.
2. Initialize your project using 'npm init -y' to generate the package.json file
3. Install the required dependencies using the following command: 'npm install express sequelize mysql2 dotenv bcryptjs jsonwebtoken'
4. Install the development dependencies needed for testing and debugging using this command: 'npm install --save-dev mocha chai chai-http'
5. Install sequelize-cli for Database setup using the following command: 'npm install sequelize-cli --save-dev'
6. Initialize sequelize in your project using this command: 'npx sequelize-cli init'. This will create config folder, models folder, migrations folder and seeders folder.
7. Create a .env file in the root of your folder to store environment variables and other sensitive details.
8. Modify your project as is in this project.
9. Using MySQL, create the database to be used using this command: 'CREATE DATABASE <-database_name->
10. Use the Sequelize CLI to generate user model and an expense model using the fllowing commands:
'npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string'
'npx sequelize-cli model:generate --name Expense --attributes amount:decimal,description:string,userId:integer'
11. Apply the migrations to create the tables in the database using this command: 'npx sequelize-cli db:migrate'
12. After setting up the folders and files as in this repository, start your application using the following command: 'npx nodemon'

# Testing the Application in Postman
1. Register a User: Set the method to POST, URL to http://localhost:4000/api/register and Body (raw JSON) as this:
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}
2. Login a User: Set the method to POST, URL to http://localhost:4000/api/login and Body (raw JSON) as this:
{
  "username": "testuser",
  "password": "password123"
}. This will give a JWT token at the response.
3. Add an expense: Set the method to POST, URL to http://localhost:4000/api/expenses, add the 'Authorization' header with 'Bearer <token> (replace <token> with the JWT you received from login)' and Body (raw JSON) as this:
{
  "amount": 100,
  "description": "Lunch",
  "userId": 1
}
4. View expenses: Set the method to GET, URL to http://localhost:4000/api/expenses and add the 'Authorization' header with 'Bearer <token>'

# Testing the Application with Mocha and Chai
1. Create a directory named 'test' in the root of your directory.
2. In the 'test' folder, create a file named 'app.test.js' and write the code as in this project.
3. Use the command, 'npx mocha' to run the test.