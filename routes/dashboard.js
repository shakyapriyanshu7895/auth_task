const router = require("express").Router();
const {verifyToken}=require('../controllers/verifyToken');

router.get('/dashboard',verifyToken,(req,res)=>{
    res.render('dashboard');
})





module.exports = router;