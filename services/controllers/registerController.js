const router = require('express').Router();
const Usuarios = require('../database/models/modelUser/user');
const Aluno = require('../database/models/modelAluno/aluno');

const bcrypt = require('bcryptjs');




router.post('/', async (req, res) => {
    const { name, email, password, nome_responsavel, nascimento, alfabetizado, ano_escolar } = req.body
    console.log( name, email, password, nome_responsavel, nascimento, alfabetizado, ano_escolar)
    const registerUser = async () => {
        let passHash = await bcrypt.hash(String(password), 10)
        
        Usuarios.create({
            email: email,
            senha: passHash,
        })


        Aluno.create({
            nome: name,
            data_nascimento: nascimento,
            responsavel_nome: nome_responsavel,
            ano_escolar: ano_escolar,
            alfabetizado: alfabetizado[0],
        })
    }
    await registerUser()
    
   })

module.exports = app => app.use('/register', router)