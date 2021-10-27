const router = require('express').Router();

const rVentaController = require('../controllers/rVentaController');

router.get('/', rVentaController.rventa);
router.post('/add', rVentaController.save);
router.post('/add', rVentaController.agendar);

module.exports = router;