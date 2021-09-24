const express = require('express')
const database = require('./services/database/queries')
const app = express()


const dirname = __dirname



app.use(express.json())

app.use(express.urlencoded({ 
    extended: true 
    }
))
app.use(express.static(dirname + '/public'))

app.get('/login', function(req, res) {
    res.sendFile(dirname + '/public/pages/login_page/login.html')

})

app.get('/register', function(req, res) {
    res.sendFile(dirname + '/public/pages/registration_page/register.html')
})

app.post("/clients", function(req, res){
    async function getData(res){
        console.log("[APLICATION]");
        
        var data_response = `{"email": "${res.email}", "password": "${res.pass}"}`;
        var jsonOutput = JSON.stringify(JSON.parse(data_response),null,2);  

        console.log(`${jsonOutput}\n`)
    }

    getData(req.body)
})

app.get('/db', database.connetionVerify)
app.get('/users', database.getUsers)
app.get('/users/:primaryKey', database.getUser)
app.post('/users/register', database.registerUser)

app.listen(3000, function() {
    console.log("Listening on http://localhost:3000 \n")
})