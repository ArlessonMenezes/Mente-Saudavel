const Sequelize = require('sequelize');

const connecton = new Sequelize('menteSaudavel', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connecton;