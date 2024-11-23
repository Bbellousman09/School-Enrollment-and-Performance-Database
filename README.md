The Learning League: Empowering Education Through Data
Welcome to The Learning League! This project aims to revolutionize student success tracking through a School Enrollment and Performance Database. Our dynamic system nurtures growth and celebrates achievements, providing a centralized hub for student data, real-time tracking, and comprehensive insights.


Technologies Used
HTML: For structuring the web pages.

CSS: For styling the web pages.

JavaScript: For front-end functionality.

Node.js: For server-side processing.

MySQL: For database management.

Project Setup
Prerequisites
Before I began, I ensured I had the following installed:

Node.jsand npm (Node Package Manager)

MySQL

Steps
I cloned the repository:

sh
git clone https://github.com/your-username/learning-league.git
cd learning-league
Install dependencies:

sh
npm install
Setting up environment variables: Create a .env file in the root directory and add your database credentials:

env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_enrollment
Initialize the database:

Open MySQL Workbench.

Run the following SQL commands to create the database:

sql
CREATE DATABASE school_enrollment;
USE school_enrollment;
Database Connection
Configuring Sequelize
The project uses Sequelize, a Node.jsORM, to manage database interactions. Ensure your models/index.js file is configured as follows:

javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Student = require('./student')(sequelize, DataTypes);
const Attendance = require('./attendance')(sequelize, DataTypes);

Student.hasMany(Attendance, { foreignKey: 'studentId' });
Attendance.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = { sequelize, Student, Attendance };
Running Migrations
Run migrations to set up the database tables:

sh
npx sequelize-cli db:migrate
Running the Project
Starting the Server
Start the server using npm:

sh
npm start
The server will run on http://localhost:3000.

Accessing the Application
Open your web browser and navigate to http://localhost:3000 to access the application.

Challenges Faced
Data Consolidation: Integrating multiple data sources into a single cohesive database was challenging but crucial for a holistic view of student performance.

Real-time Tracking: Implementing real-time updates for student attendance and performance required careful synchronization and efficient data handling.

User Interface Design: Ensuring a user-friendly interface that allows easy data entry and visualization was essential but required iterative testing and improvement.

Work in Progress
This project is still a work in progress and is far from the ideal project I envision. I am continuously working on enhancements and welcome any feedback or contributions.
