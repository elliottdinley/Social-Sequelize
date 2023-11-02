const { sequelize } = require('../db/connection.js');
const { DataTypes } = require('sequelize');

let Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});

module.exports = Post;