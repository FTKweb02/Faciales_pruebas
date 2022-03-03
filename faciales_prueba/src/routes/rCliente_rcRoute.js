const router = require('express').Router();

const rCliente_rcController = require('../controllers/rCliente_rcController');

router.get('/', rCliente_rcController.rcliente);
router.post('/add', rCliente_rcController.save);
//router.post('/addag', rClienteController.agendar);

module.exports = router;