const express = require('express')

const app = express()


const database = require('./services/database/queries')
const session = require('./services/middlewares/config/session')



const home = require('./routes/home')

const auth = require('./services/controllers/authController')
const registerUser = require('./services/controllers/registerController')
const userInfo = require('./services/controllers/userController')

const dashboard = require('./routes/dashboard')
const leitura = require('./routes/leitura')
const quizzes = require('./routes/quizzes')
const perfil = require('./routes/perfil')
const alfabeto = require('./routes/alfabeto')
const videos = require('./routes/videos')


app.use(session);
app.use(express.json())
app.use(express.urlencoded({extended: true }))


const dirname = __dirname
app.use(express.static(dirname + '/public'))


app.use('/home', home)

app.use('/auth', auth)
app.use('/register', registerUser)
app.use('/userinfo', userInfo)

app.use('/dashboard', dashboard)
app.use('/dashboard/leitura', leitura)
app.use('/dashboard/quizzes', quizzes)
app.use('/dashboard/perfil', perfil)
app.use('/dashboard/alfabeto', alfabeto)
app.use('/dashboard/videos', videos)

app.get('/login', function(req, res) {
    res.sendFile(dirname + '/public/pages/login_page/login.html')
})

app.get('/cadastro', function(req, res) {
    res.sendFile(dirname + '/public/pages/registration_page/register.html')
})

app.get('/home', function(req, res) {
    res.sendFile(dirname + '/public/pages/home_page/home.html')
})



app.get('/db', database.connetionVerify)
app.get('/users', database.getUsers)
app.get('/users/:primaryKey', database.getUser)

app.post('/users/register', database.registerUser)


app.post('/clients', function(req,res){
    console.log(req.body)

    res.json({message: "ok"})
})

app.listen(3000, function() {
    console.log("Listening on http://localhost:3000 \n")
})