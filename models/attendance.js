module.exports = (sequelize, DataTypes) => {  
    const Attendance = sequelize.define('Attendance', {  
        studentId: {  
            type: DataTypes.INTEGER,  
            allowNull: false,  
            references: {  
                model: 'Students', // Ensure this matches your Student model name  
                key: 'id',  
            },  
            onUpdate: 'CASCADE',  
            onDelete: 'CASCADE',  
        },  
        date: {  
            type: DataTypes.DATE,  
            allowNull: false,  
        },  
        status: {  
            type: DataTypes.BOOLEAN,  
            allowNull: false,  
        },  
    }, {  
        timestamps: true,  
    });  

    // Associations  
    Attendance.associate = (models) => {  
        Attendance.belongsTo(models.Student, {  
            foreignKey: 'studentId',  
            as: 'student', // Optional: use this alias for easier access in queries  
        });  
    };  

    return Attendance;  
};