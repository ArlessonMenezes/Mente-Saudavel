const Sequelize = require('Sequelize');
const connection = require('../database/database');
const Paciente = require('./Paciente');

const Sugestao = connection.define('sugestoes', {
    titulo: { 
        type: Sequelize.STRING,
              allowNull: false
    },
    descricao: { 
        type: Sequelize.STRING,
              allowNull: false
    },
})

// Sugestao.hasMany(Paciente);
// Paciente.belongsTo(Sugestao);

Sugestao.sync({ alter: true });

module.exports = Sugestao;