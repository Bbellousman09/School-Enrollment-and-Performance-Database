module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define('Attendance', {
        studentId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Student',
                key: 'id'
            }
        },
        attendanceDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Attendance.associate = function(models) {
        Attendance.belongsTo(models.Student, { foreignKey: 'studentId' });
    };

    return Attendance;
};