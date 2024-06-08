const { DataTypes } = require("sequelize");
const db = require("../db");

const User = require("./User");

const Folder = db.define("Folder", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    }
});

User.hasMany(Folder);
Folder.belongsTo(User);

module.exports = Folder;