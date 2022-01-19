const router = require('express').Router();

const pendientesController = require('../controllers/pendientesController');

router.get('/', pendientesController.pendientes);

module.exports = router;