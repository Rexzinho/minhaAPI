const Folder = require("../models/Folder");
const User = require("../models/User");

module.exports = class FolderController{
    static async create(req, res){

        const folder = {
            name: req.body.name,
            UserId: req.body.UserId
        }

        const user = await User.findOne({where: {id: folder.UserId}});
    
        if(!user){
            res.json({
                message: "Usuário não encontrado",
            });
            return;
        }

        try {
            Folder.create(folder);
            res.json({
                message: "Pasta criada com sucesso!"
            })
        } catch (error) {
            res.json({
                message: "Erro ao criar a pasta."
            })
        }
    }

    static async show(req, res){

        const UserId = req.body.UserId;

        const user = await User.findOne({where: {id: UserId}});

        if(!user){
            res.json({
                message: "Usuário não encontrado."
            });
            return;
        }

        try {
            const folders = await Folder.findAll({where: {UserId: UserId}}, {raw: true});
            res.json(folders);
        
        } catch (error) {
            res.json({
                message: "Erro ao pegar pastas."
            });
        }    
    }
}