const router = require('express').Router();
const express = require('express')
const Usuarios = require('../database/models/modelUser/user');
const Aluno = require('../database/models/modelAluno/aluno');
const database = require('../database/db');

const bcrypt = require('bcryptjs');



router.use(express.urlencoded({ extended: true }))

router.post('/', async (req, res) => {
    const { name, email, password, nome_responsavel, nascimento, alfabetizado, ano_escolar } = req.body
    console.log(name, email, password, nome_responsavel, nascimento, alfabetizado, ano_escolar)
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

        await database.sync(); 

        const user = await Usuarios.findOne({ where: { email: email } })
        req.session.userid = user.id_usuario    
    }


    await registerUser()



    res.status(200).end()
})


module.exports = router