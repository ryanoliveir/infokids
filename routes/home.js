const express = require('express');
const { route } = require('../services/controllers/authController');
const router = require('express').Router();
const path = process.cwd()


router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/home_page/home.html')
})

router.get('/saibamais', (req, res) => {    
    res.sendFile(path + '/public/pages/home_page/saiba_mais_page/saiba_mais_page.html')

})

router.get('/apoio', (req, res) => {
    res.sendFile(path + '/public/pages/home_page/apoiadores_page/apoiadores_page.html')
})


module.exports = router


