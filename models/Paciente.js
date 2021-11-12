const Sequelize = require('Sequelize');
const connection = require('../database/database');


const Paciente = connection.define('paciente', {
    nome: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    email: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    senha: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
              allowNull: false
    },
    matricula: {
        type: Sequelize.STRING,
              allowNull: false
    },
    endereco: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    cidade: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    estado: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    cpf: { 
        type: Sequelize.TEXT,
              allowNull: false
    }
})

Paciente.sync({ alter: true });
module.exports = Paciente;