// 
const sequelize= require('../config/connection');
const bcrypt= require('bcrypt');
const { Model, DataTypes}= require('sequelize');

class User extends Model {}


User.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    }
},
{
    hooks:{
        async beforeCreate(newUserData){
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize, //links this model to the db connection
    timestamps: false, //if true would add a timestamp on the table
    freezeTableName: true, //prevents sequelize from changing the table name
    underscored: true, //tells sequelize to use snake case instead of camel case
    modelName: 'user', //name of the model
});

module.exports = User;


// Allow null: specifies whether a column accepts null values
// Primary key: unique id used for storage and retrieval
// Auto increment:auto generates a value for the primary key
// Hooks: functions that run at specific times during operation
// beforeCreate Hook: runs before completing the operation (in this case, hashes the password)