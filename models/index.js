const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('school_enrollment', 'root', 'Standard_577880', {
    host: 'localhost',
    dialect: 'mysql'
});

// Import models
const Student = require('./student')(sequelize, DataTypes);
const Attendance = require('./attendance')(sequelize, DataTypes);

// Set up associations
Student.hasMany(Attendance, { foreignKey: 'studentId' });
Attendance.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = { sequelize, Student, Attendance };
