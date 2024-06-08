const User = require("../models/User");

module.exports = class UserController {

    static async create(req, res){

        const {name, email, password, confirmPassword} = req.body;

        // check if there's missing information
        if(!name){
            res.status(400).json({message: "Necessário preencher o nome."});
            return;
        }
        if(!email){
            res.status(400).json({message: "Necessário preencher o e-mail."});
            return;
        }
        if(!password){
            res.status(400).json({message: "Necessário preencher a senha."});
            return;
        }

        // check if email is already being used
        const checkUser = await User.findOne({where: {email: email}});
        if(checkUser){
            res.status(409).json({message: "E-mail já em uso."});
            return;
        }

        // check if passwords match
        if(password !== confirmPassword){
            res.status(400).json({message: "As senhas não batem."});
            return;
        }

        // create user in db
        const user = {name, email, password}

        try {
            await User.create(user);
            res.status(201).json({message: "Usuário criado com sucesso!"});
            
        } catch (error) {
            res.status(500).json({message: "Erro ao criar o usuário"});
        }
    }

    static async list(req, res){

        try {
            const users = await User.findAll({raw: true});
            res.json(users);

        } catch (error) {
            res.json({
                message: "Erro ao listar usuários",
            });
        }
    }

    static async getUser(req, res){
        const id = req.params.id;
        const user = await User.findOne({where: {id: id}}, {raw: true});
        if(!user){
            res.json({
                message: "Usuário não encontrado."
            });
            return;
        }
        res.json(user);
    }

}
