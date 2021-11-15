const express = require('express')
const router = require('express').Router()
const path = process.cwd()
const authMiddleware = require('../services/middlewares/auth_autorization')



router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))


router.use('/', (req, res) => {
    res.sendFile(path + '/public/pages/vogais_atividade_page/vogais_atividade_page.html')
})


module.exports = router