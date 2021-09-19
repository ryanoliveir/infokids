const database = require('./db');
const modelUser = require('./models/modelUser/user')


const connetionVerify = async function (){
    try{
        await database.authenticate();
        console.log('Connection successful!!!')       
        return
    }catch(err){
        console.error("Connetion database error", err);
        return;
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


module.exports = {
    connetionVerify,
    getUsers,
    getUser,

}