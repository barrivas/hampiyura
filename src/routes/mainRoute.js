//Require
const express = require("express");
const router = express.Router();
const path = require("path");

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.index);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);
router.get("/fitoterapia", mainControllers.fitoterapia);
router.get("/infoplantas", mainControllers.infoplantas);
router.get("/contacto", mainControllers.contacto);

module.exports = router;
