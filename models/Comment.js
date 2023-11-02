const { sequelize } = require('../db/connection.js');
const { DataTypes } = require('sequelize');

let Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});

module.exports = Comment;