const Sequelize = require('sequelize');
const database = require('../../db');

const Aluno = database.define("alunos",{
    id_aluno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(255),
    },
    data_nascimento: {
        type: Sequelize.DATE
    },
    responsavel_nome: {
        type: Sequelize.STRING(255),
    },
    ano_escolar: {
        type: Sequelize.STRING(50),
    },
    alfabetizado: {
        type: Sequelize.ENUM('S','N')
    }
}, {
    tableName: 'alunos'
}

);

module.exports = Aluno;