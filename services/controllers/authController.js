const express = require('express')
const router = require('express').Router()
const modelUser = require('../database/models/modelUser/user')
const bcrypt = require('bcryptjs');
const sessions = require('express-session')

const secret = "dawjd123"
const path = process.cwd() 


router.use(express.static(path));

//router.use(session({ secret: secret }));

router.use(sessions({
    secret: secret,
    saveUninitialized: true,
    cookie: {maxAge: 120000},
    resave: false
}));


router.use(express.urlencoded({extended: true }))

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await modelUser.findOne({where: { email: email } })

    if(!user){
        req.session.userid = null
        return res.send({ error: "User not found"})

    }

    if(!await bcrypt.compare(password, user.senha)){
        return res.send({ error: "Invalid password"})
    }

    //const token = jwt.sign({user: user.id_usuario}, secret, {expiresIn: 300})
    user.senha = undefined; 

    req.session.userid = user.id_usuario

    
    res.status(200).end()



})



router.get('/menu', async function(req, res,){
    if(req.session.userid != null){
        res.sendFile(path + '/public/pages/menu_page/menu_page.html')
    }else{
        res.send({'message': "Error"})
    }

})



module.exports = app => app.use('/auth', router)