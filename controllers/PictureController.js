const Picture = require("../models/Picture");
const File = require("../models/File");

module.exports = class PictureController{
    static async create(req, res){

        const FileId = req.body.FileId;
        const file = await File.findOne({where: {id: FileId}});

        if(!file){
            res.json({
                message: "File não encontrado."
            });
            return;
        }

        try {
            const picture = {
                name: req.body.name,
                src: req.file.path,
                FileId,
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