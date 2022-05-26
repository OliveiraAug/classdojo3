const express = require('express');
const routers = require('./api');
const {sequelize} = require ('./models')
const app = express();

app.use(express.json());
app.use('/', routers);

sequelize.sync().then(()=>{
    console.log('conectado com o banco');
});

app.listen(3000, ()=>{
    console.log('salve');

});