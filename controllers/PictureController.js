const Picture = require("../models/Picture");
const Folder = require("../models/Folder");

module.exports = class PictureController{
    static async create(req, res){

        const FolderId = req.body.FolderId;
        const folder = await Folder.findOne({where: {id: FolderId}});

        if(!folder){
            res.json({
                message: "Pasta não encontrada."
            });
            return;
        }

        try {
            const picture = {
                name: req.body.name,
                src: req.file.path,
                FolderId,
            };

            await Picture.create(picture);

            res.json({
                message: "Arquivo criado com sucesso!"
            })

        } catch (error) {
            console.log(error);
            res.json({
                message: "Erro ao criar arquivo"
            });
        }
    }
}