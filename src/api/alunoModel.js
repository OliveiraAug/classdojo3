const { DataTypes } = require("sequelize/types");
const sequelize = require("../config/sequelize");

const alunoModel = (sequelize,DataTypes)=>{
    const Aluno = sequelize.define('Aluno', {
        id:{
            type: DataTypes.INTEGER
        },
        nome:{
            type: DataTypes.STRING
        },
        modulo:{
            type: DataTypes.STRING
        },
    });
};