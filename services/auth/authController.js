const router = require('express').Router()
const modelUser = require('../database/models/modelUser/user')
const bcrypt = require('bcryptjs');


router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await modelUser.findOne({where: { email: email } })

    if(!user){
        return res.send({ error: "User not found"})

    }

    if(!await bcrypt.compare(password, user.senha)){
        return res.send({ error: "Invalid password"})
    }

    user.senha = undefined;

    res.send({ user })

})



module.exports = app => app.use('/auth', router)