const sequelize = require("../config/sequelize");

const aulas = (sequelize, DataTypes) => {
    const Aula = sequelize.define('Aula', {
        modulo_id: {
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING
        },
        descricao: {
            type: DataTypes.STRING
        }
    }, {
        tableName: aulas
    });

    return Aula;
};
module.exports = aulas;