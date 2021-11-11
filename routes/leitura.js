const express = require('express')
const router = require('express').Router()
const path = process.cwd();
const authMiddleware = require('../services/middlewares/auth_autorization');

router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))

router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/leitura_page/leitura.html')
})

router.get('/leitura1', (req, res) => {
    res.sendFile(path + '/public/pages/a_pequena_sereia_page/pequena_sereia_page.html')
    //res.send({message: 'pequena sereia'})
})

router.get('/leitura2', (req, res) => {
    res.sendFile(path + '/public/pages/branca_de_neve_page/branca_de_neve_page.html')
    //res.send({message: 'branca de neve'})
})

router.get('/leitura3', (req, res) => {
    res.sendFile(path + '/public/pages/chapeuzinho_vermelho_page/chapeuzinho_vermelho_page.html')
    //res.send({message: 'chapeuzinho vermelho'})
})

router.get('/leitura4', (req, res) => {
    res.sendFile(path + '/public/pages/cinderela_page/cinderela_page.html')
    //res.send({message: 'cinderela'})
})

router.get('/leitura5', (req, res) => {
    res.sendFile(path + '/public/pages/o_magico_de_oz_page/o_magico_de_oz_page.html')
})

router.get('/leitura6', (req, res) => {
    res.sendFile(path + '/public/pages/peter_pan_page/peter_pan_page.html')
})



module.exports = router