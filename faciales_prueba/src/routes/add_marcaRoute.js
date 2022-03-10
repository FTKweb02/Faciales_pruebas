const router = require('express').Router();

const addmarcaController = require('../controllers/add_marcaController');

router.get('/', addmarcaController.addmarca);

module.exports = router;