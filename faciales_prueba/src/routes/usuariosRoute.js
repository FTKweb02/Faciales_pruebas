const router = require('express').Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.usuarios);

module.exports = router;