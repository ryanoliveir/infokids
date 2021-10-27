const express = require('express')
const database = require('./services/database/queries')
const app = express()
const authorization = require('./services/middlewares/auth_autorization')


const dirname = __dirname



app.use(express.json())
app.use(express.urlencoded({extended: true }))



app.use(express.static(dirname + '/public'))

require('./services/controllers/authController')(app)
require('./services/controllers/registerController')(app)

app.get('/login', function(req, res) {
    res.sendFile(dirname + '/public/pages/login_page/login.html')
})

app.get('/cadastro', function(req, res) {
    res.sendFile(dirname + '/public/pages/registration_page/register.html')
})

app.get('/home', function(req, res) {
    res.sendFile(dirname + '/public/pages/home_page/home.html')
})

app.get('/menu', authorization, function(req, res,){
    res.sendFile(dirname + '/public/pages/menu_page/menu_page.html')
})

app.get('/leitura', function(req, res){
    res.sendFile(dirname + '/public/pages/leitura_page/leitura.html')
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