const express = require('express')
const router = require('express').Router()
const path = process.cwd()
const authMiddleware = require('../services/middlewares/auth_autorization')

router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))

router.get('/menu', (req, res) => {
    res.sendFile(path + '/public/pages/menu_page/menu_page.html')
})

module.exports = router