const sequelize= require('../config/connection');
const bcrypt= require('bcrypt');
const { Model, DataTypes}= require('sequelize');

class Post extends Model {}

Post.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [3]
            }
        },
        content:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: 
            {
                len: [10]
            }
        },
        userId: 
        {
            type: DataTypes.INTEGER,
            references: 
            {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports= Post;

