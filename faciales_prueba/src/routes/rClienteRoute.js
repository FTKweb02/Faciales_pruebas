const router = require('express').Router();

const rClienteController = require('../controllers/rClienteController');

router.get('/', rClienteController.rcliente);
router.post('/add', rClienteController.save);
router.post('/add', rClienteController.agendar);

module.exports = router;