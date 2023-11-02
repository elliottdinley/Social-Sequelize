const { sequelize } = require('../db/connection.js');
const { DataTypes } = require('sequelize');

let Profile = sequelize.define('Profile', {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});

module.exports = Profile;