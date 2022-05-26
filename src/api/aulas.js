const express = require('express');
const router = express.Router();


router.post('/', (req,res)=>{
    const dadosAluno = req.body;
    res.send('Relatório do aluno está sendo gerado com sucesso.');
});

router.get('/', (req,res)=>{
    res.json(relatorioAluno);
});

module.exports = router;