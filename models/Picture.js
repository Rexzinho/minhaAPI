const { DataTypes } = require("sequelize");
const db = require("../db");
const File = require("../models/File");

const Picture = db.define("Picture", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    },
    src: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    }
});

Picture.belongsTo(File);
File.hasOne(Picture);

module.exports = Picture; 