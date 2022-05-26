const sequelize = require ('../config/sequelize');
const Sequelize = require ('sequelize');
const Aulas = require ('./aulas');
const aulas = Aulas(sequelize, Sequelize.DataTypes);

const db = {
    aulas,
    sequelize
}

module.exports = db;