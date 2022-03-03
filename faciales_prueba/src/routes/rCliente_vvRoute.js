const router = require('express').Router();

const rCliente_vvController = require('../controllers/rCliente_vvController');

router.get('/', rCliente_vvController.rcliente);
router.post('/add', rCliente_vvController.save);
//router.post('/addag', rClienteController.agendar);

module.exports = router;