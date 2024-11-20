// models/StudentProfiles.js  
const { DataTypes } = require('sequelize');  
const sequelize = require('./database');  

const StudentProfiles = sequelize.define('StudentProfiles', {  
    StudentID: {  // Define the primary key  
        type: DataTypes.INTEGER,  
        autoIncrement: true, // Automatically increment this field  
        primaryKey: true     // Set this field as the primary key  
    },  
    FirstName: {  
        type: DataTypes.STRING,  
        allowNull: false  
    },  
    LastName: {  
        type: DataTypes.STRING,  
        allowNull: false  
    },  
    DateOfBirth: {  
        type: DataTypes.DATE,  
        allowNull: true  
    },  
    EnrollmentDate: {  
        type: DataTypes.DATE,  
        allowNull: true  
    },  
    Gender: {    // Adding Gender field  
        type: DataTypes.STRING,  
        allowNull: true  
    },  
    ContactInfo: {  // Adding ContactInfo field  
        type: DataTypes.STRING,  
        allowNull: true  
    }  
}, {  
    tableName: 'StudentProfiles', // Name of the table  
    timestamps: false               // Set this to true if you want Sequelize to handle createdAt and updatedAt timestamps.  
});  

module.exports = StudentProfiles;