require("dotenv").config();
const jwt = require("jsonwebtoken");
const Folder = require("../models/Folder");
const User = require("../models/User");

module.exports = function checkFolder(req, res, next){

    const FolderId = req.body.FolderId;

    //check if folder exists
    const folder = Folder.findOne({where: {id: FolderId}});
    if(!folder){
        return res.status(404).json({
            message: "Pasta não encontrada."
        });
    }
    const UserId = folder.UserId;

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
            if(decodedToken.id !== UserId){
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