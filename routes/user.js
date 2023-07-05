const router = require("express").Router();
const {register_user,login} = require("../controllers/auth");


//REGISTER
router.post("/register",register_user);


//LOGIN

router.post('/login', login);

module.exports = router;
