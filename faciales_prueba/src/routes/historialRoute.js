const router = require('express').Router();

const historialController = require('../controllers/historialController');

router.get('/', historialController.historial);

module.exports = router;