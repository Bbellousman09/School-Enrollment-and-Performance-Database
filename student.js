module.exports = (sequelize, DataTypes) => {  
    const Student = sequelize.define('Student', {  
        // Define your model attributes here  
        first_name: {  
            type: DataTypes.STRING,  
            allowNull: false,  
        },  
        last_name: {  
            type: DataTypes.STRING,  
            allowNull: false,  
        },  
        dob: {  
            type: DataTypes.DATE,  
            allowNull: false,  
        },  
        email: {  
            type: DataTypes.STRING,  
            allowNull: false,  
            unique: true,  
        },  
    });  

    return Student;  
};