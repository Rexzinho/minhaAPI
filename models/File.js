const { DataTypes } = require("sequelize");
const db = require("../db");
const Folder = require("../models/Folder");

const File = db.define("File", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    },
});

File.belongsTo(Folder);
Folder.hasMany(File);

module.exports = File;