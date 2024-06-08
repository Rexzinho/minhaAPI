require("dotenv").config();
const jwt = require("jsonwebtoken");
const File = require("../models/File");
const Folder = require("../models/Folder");

module.exports = async function checkTokenByFile(req, res, next){

    const FileId = req.body.FileId;

    if(!FileId){
        return res.status(400).json({
            message: "FileId necessário."
        })
    }

    //check if folder exists
    const file = await File.findOne({where: {id: FileId}});
    if(!file){
        return res.status(404).json({
            message: "File não encontrado."
        });
    }

    // get UserId
    const FolderId = file.FolderId;
    const folder = await Folder.findOne({where: {id: FolderId}});
    const UserId = folder.UserId;

    // check if token and UserId match
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "Acesso negado"
        });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret, async (err, decodedToken) => {
            if (err) {
                return res.status(400).json({
                    message: "Token inválido."
                });
            }

            if (decodedToken.id !== UserId) {
                return res.status(400).json({
                    message: "Token de usuário inválido."
                });
            }
            else{
                next();
            }
        });

    } catch (error) {
        res.status(400).json({
            message: "Token inválido."
        })
    }
}