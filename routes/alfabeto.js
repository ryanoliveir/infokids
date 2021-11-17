const express = require('express')
const router = require('express').Router()
const path = process.cwd()
const authMiddleware = require('../services/middlewares/auth_autorization')

router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))

router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/alfabeto_page/alfabeto.html')
})


module.exports = router