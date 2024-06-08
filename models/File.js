const { DataTypes } = require("sequelize");
const db = require("../db");
const Picture = require("./Picture");

const File = db.define("File", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    }
});

File.has

module.exports = File;