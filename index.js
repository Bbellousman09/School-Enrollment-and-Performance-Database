const { Sequelize, DataTypes } = require('sequelize');  
const sequelize = new Sequelize('school_enrollment', 'root', 'Standard_577880', {  
    host: 'localhost',  
    dialect: 'mysql' // or 'postgres', 'sqlite', 'mssql'   
});  

// Import your models  
const Student = require('./student')(sequelize, DataTypes);  
const Attendance = require('./attendance')(sequelize, DataTypes);  

// For example, if using Sequelize associations:  
Student.associate = (models) => {  
    // Define associations here, if needed  
};  

const models = {  
    Student,  
    Attendance,  
    sequelize,  
};  

// Run the associations if they exist  
Object.keys(models).forEach(modelName => {  
    if (models[modelName].associate) {  
        models[modelName].associate(models);  
    }  
});  

module.exports = models;