// database.js  
const { Sequelize } = require('sequelize');  

// Create a Sequelize instance  
const sequelize = new Sequelize('school_enrollment', 'root', 'Standard_577880', {  
    host: 'localhost',  
    dialect: 'mysql' // or 'postgres', 'sqlite', 'mssql'  
});  

module.exports = sequelize;