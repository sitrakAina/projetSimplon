const Control = require('../../controllers/controller')

const Admin = require('../../controllers/atelier/atelier')
const express = require("express");
const router = express.Router();

router.post('/register', Control.postRegister)
router.post("/login", Control.postLogin)
router.post('/atelier/', Admin.postAtelier);
router.get('/atelier', Admin.findAllAtelier);
router.put('/atelier/:atelierId', Admin.putAtelier);
router.get('/atelier/:image', Admin.findImageAtelier);

module.exports = router;
