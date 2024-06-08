const File = require("../models/File");

module.exports = class FileController{
    
    static async create (req, res){
        
        const {FolderId, name} = req.body;

        // check if there's missing information
        if(!name){
            return res.status(400).json({
                message: "Necessário preencher o nome do file."
            });
        }

        try {
            File.create({FolderId, name});
            res.status(201).json({
                message: "File criado com sucesso."
            })
            
        } catch (error) {
            res.status(500).json({
                message: "Erro ao criar file. Tente novamente mais tarde."
            })
        }
    }
}