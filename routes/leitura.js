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
    res.send({message: 'pequena sereia'})
})

router.get('/leitura2', (req, res) => {
    res.send({message: 'branca de neve'})
})

router.get('/leitura3', (req, res) => {
    res.send({message: 'chapeuzinho vermelho'})
})

router.get('/leitura4', (req, res) => {
    res.send({message: 'cinderela'})
})

router.get('/leitura5', (req, res) => {
    res.send({message: 'tres mosqueteiros'})
})

router.get('/leitura6', (req, res) => {
    res.send({message: 'peter pan'})
})



module.exports = router