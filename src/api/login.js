const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('pagina login');
});

module.exports = router;