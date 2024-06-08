const { DataTypes } = require("sequelize");
const db = require("../db");
const File = require("../models/File");

const Script = db.define("Script", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        require: true,
        allowNull: false,
    },
});

Script.belongsTo(File);
File.hasOne(Script);

module.exports = Script;