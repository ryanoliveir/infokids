const Sequelize = require('sequelize');
const database = require('../../db')

const User = database.define("usuarios",{
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(50),
    },

    senha: {
        type: Sequelize.STRING(255),
    },
    
});

module.exports = User;