const express = require('express');

const router = require('express').Router();
const modelUser = require('../database/models/modelUser/user');
const modelAluno = require('../database/models/modelAluno/aluno');

router.use(express.urlencoded({extended: true}));




router.get('/profileinfo', async (req, res) => {
    const session = req.session;
    const user = await modelUser.findByPk(session.userid)
    if(user){
        console.log('Usuario encontrado: ')
        const aluno = await modelAluno.findOne({ where: { usuario_credencial: session.userid } })  
        const data = {
            nome: aluno.dataValues.nome,
            email: user.dataValues.email,
            nome_responsavel: aluno.dataValues.responsavel_nome,
            ano_escolar: aluno.dataValues.ano_escolar,
            nascimento: aluno.dataValues.data_nascimento,
            alfabetizado: aluno.dataValues.alfabetizado
        }

        res.json({message: 'success', profile: data})
        
    }else{
        res.json({message: "User not found", status: "error"})
    }

})

module.exports = router;