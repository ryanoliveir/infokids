const router = require('express').Router()
const modelUser = require('../database/models/modelUser/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret = "dawjd123"

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await modelUser.findOne({where: { email: email } })

    if(!user){
        return res.send({ error: "User not found"})

    }

    if(!await bcrypt.compare(password, user.senha)){
        return res.send({ error: "Invalid password"})
    }

    const token = jwt.sign({user: user.id_usuario}, secret, {expiresIn: 300})
    user.senha = undefined;

    
    res.send({ user: user, token: token })

})



module.exports = app => app.use('/auth', router)