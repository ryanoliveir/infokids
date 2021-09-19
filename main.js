const express = require('express')
const database = require('./services/database/db')
const app = express()


const dirname = __dirname

app.use(express.json())

app.use(express.urlencoded({ 
    extended: true 
    }
))
app.use(express.static(dirname + '/public'))

async function verifyConnection(){
    try{
        await database.authenticate();
        console.log('authenticated...');
        const User = require('./services/database/modelUser/user')

        await database.sync()

        const newUser = await User.create({
            email: "mika1394@gmail.com",
            senha: "13294mikaela"
        })

        //const users = await User.findAll()
        console.log(newUser);

        
    }catch(err){
        console.error("Not connected", err);
    }
}

app.get('/login', function(req, res) {
    res.sendFile(dirname + '/public/pages/login_page/login.html')

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

app.listen(3000, function() {
    console.log("Listening on http://localhost:3000\n")
    verifyConnection()
})