const { DataTypes } = require("sequelize");
const db = require("../db");

const Folder = require("./Folder");

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

Folder.hasMany(Picture);
Picture.belongsTo(Folder);

module.exports = Picture; 