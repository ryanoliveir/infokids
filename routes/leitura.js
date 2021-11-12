const express = require('express')
const router = require('express').Router()
const path = process.cwd();
const authMiddleware = require('../services/middlewares/auth_autorization');

router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))

router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/leitura.html')
})

router.get('/pequenasereia', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/pequena_sereia/pequena_sereia.html')
    //res.send({message: 'pequena sereia'})
})

router.get('/brancadeneve', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/branca_de_neve/branca_de_neve.html')
    //res.send({message: 'branca de neve'})
})

router.get('/chapeuzinho', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/chapeuzinho/chapeuzinho.html')
    //res.send({message: 'chapeuzinho vermelho'})
})

router.get('/cinderela', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/cinderela/cinderela.html')
    //res.send({message: 'cinderela'})
})

router.get('/omagicodeoz', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/magicodeoz/magicodeoz.html')
})

router.get('/peterpan', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/peterpan/peterpan.html')
})



module.exports = router