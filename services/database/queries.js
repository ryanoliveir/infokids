const database = require('./db');
const User = require('./models/modelUser/user');
const modelUser = require('./models/modelUser/user')

const bcrypt = require('bcryptjs');


const connetionVerify = async function (resquest, response) {
    try{
        await database.authenticate();
        await database.sync(); 
        response.json({'message': "Connection successful!!!"}); 
    }catch(err){
        console.error("Connetion database error", err);
        response.json({'message': "Connection Failed!!!"});
    }

}

const getUsers = async function(request, response){
    const users = await modelUser.findAll();
    response.json(users);  
}

const getUser = async function(request, response){
    const primaryKey = parseInt(request.params.primaryKey);
    const user = await modelUser.findByPk(primaryKey);
    response.json(user);
}



// POST

const registerUser = async function(request, response){
    let passHash = await bcrypt.hash(String(request.body.senha), 10);
    User.create({
        email: request.body.email,
        senha: passHash,
    })

    response.json({'message': 'Register ok', 'hash':`${passHash}`});
}


module.exports = {
    connetionVerify,
    getUsers,
    getUser,
    registerUser,
}