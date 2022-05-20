const express = require('express');
const dashboardRouter = require('./dashboard');
const loginRouter = require('./login');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('app online');
});

router.use('/dashboard', dashboardRouter)
router.use('/login', loginRouter)

module.exports = router;