const express = require('express')
const router = require('express').Router()
const path = process.cwd()
const authMiddleware = require('../services/middlewares/auth_autorization')



router.use(authMiddleware)
router.use(express.urlencoded({extended: true }))


router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/quizzes.html')
})

router.get('/vogais', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/vogais_atividade_page/vogais_atividade_page.html')
    
})

router.get('/dinheiro', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/dinheiro_atividade_page/dinheiro_page.html')
    
})

router.get('/pontos_de_referencia', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/pontos_de_ref_page/pontos_de_ref_page.html')
    
})



router.get('/o_dia_e_a_noite', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/o_dia_e_a_noite_page/o_dia_e_a_noite_page.html')
    
})

router.get('/familia', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/familia_page/familia_page.html')
    
})

router.get('/pontuacao', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/pontuacao_page/pontuacao_page.html')
    
})

router.get('/problemas_matematicos', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/problemas_page/problemas_page.html')
    
})

router.get('/meios_de_transporte', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/meios_transporte_page/meios_transporte_page.html')
    
})

router.get('/partes_das_plantas', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/partes_plantas_page/partes_plantas_page.html')
    
})

router.get('/fontes_historicas', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/fontes_historicas_page/fontes_historicas_page.html')
    
})

router.get('/ortografia', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/ortografia_page/ortografia_page.html')
    
})

router.get('/figuras_planas', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/figuras_planas_page/figuras_planas_page.html')
    
})

router.get('/materia_prima', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/materia_prima_page/materia_prima_page.html')
    
})

router.get('/trabalho_no_campo_e_na_cidade', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/trabalho_campo_cida_page/trabalho_atividade_page.html')
    
})

router.get('/planetas', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/planetas_page/planetas_page.html')
    
})

router.get('/generos_textuais', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/genero_textual_page/genero_page.html')
    
})

router.get('/fracoes', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/fracoes_page/fracoes_page.html')
    
})

router.get('/mapa', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/mapa_page/mapa_page.html')
    
})

router.get('/pontos_cardeais', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/pontos_cardeais_page/pontos_cardeais_page.html')
    
})

router.get('/historia_do_brasil', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/historia_do_brasil_page/historia_do_brasil_page.html')
    
})

router.get('/sufixo', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/sufixo_page/sufixo_page.html')
    
})

router.get('/figuras_espaciais', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/figuras_espaciais_page/figuras_espaciais_page.html')
    
})

router.get('/qualidade_ambiental', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/qualidade_ambiental_page/qualidade_ambiental_page.html')
    
})

router.get('/reciclagem', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/reciclagem_page/reciclagem_page.html')
    
})

router.get('/cultura_indigena', (req, res) => {
    res.sendFile(path + '/public/pages/atividades_page/cultura_indigena_page/indigena_page.html')
    
})

module.exports = router