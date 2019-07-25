const Control = require('../../controllers/controller')
const visiteur = require('../../controllers/visiteur/particulierController')
const Admin = require('../../controllers/atelier/atelier')
const express = require("express");
const router = express.Router();

router.post('/register', Control.postRegister)
router.post("/login", Control.postLogin)
router.post('/atelier/', Admin.postAtelier);
router.get('/atelier', Admin.findAllAtelier);
router.put('/atelier/:atelierId', Admin.putAtelier);
router.get('/atelier/:image', Admin.findImageAtelier);
router.post('/visiteur', visiteur.postParti);

module.exports = router;
