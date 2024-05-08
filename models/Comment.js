const sequelize= require('../config/connection');
const bcrypt= require('bcrypt');
const { Model, DataTypes}= require('sequelize');

class Comment extends Model {}

Comment.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            }
        },
        userId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id'
            }
        },
        postId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
