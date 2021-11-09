const router = require('express').Router();

const rClienteController = require('../controllers/rClienteController');

router.get('/rcliente', rClienteController.rcliente);
router.post('/add', rClienteController.save);
//router.post('/addag', rClienteController.agendar);

module.exports = router;