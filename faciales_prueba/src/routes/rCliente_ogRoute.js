const router = require('express').Router();

const rCliente_ogController = require('../controllers/rCliente_ogController');

router.get('/', rCliente_ogController.rcliente);
router.post('/add', rCliente_ogController.save);
//router.post('/addag', rClienteController.agendar);

module.exports = router;