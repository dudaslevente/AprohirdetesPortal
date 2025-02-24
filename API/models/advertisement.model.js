const { DataTypes } = require('sequelize');
const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const { User } = require('./user.model');  
const Category = require('./category.model');  

const Advertisement = db.define('advertisements', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },    
    price: {
        type: DataTypes.INTEGER,  
        allowNull: false
    },    
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Advertisement.belongsTo(User, { foreignKey: 'userID', targetKey: 'id'});
User.hasMany(Advertisement, { foreignKey: 'userID', sourceKey: 'id'});

Advertisement.belongsTo(Category, { foreignKey: 'categoryID', targetKey: 'id'});
Category.hasMany(Advertisement, { foreignKey: 'categoryID', sourceKey: 'id',});


module.exports = { Advertisement };
