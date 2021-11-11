const router = require('express').Router();

const rVentaController = require('../controllers/rVentaController');

router.get('/rVenta', rVentaController.rventa);
router.post('/addm', rVentaController.save);
router.post('/addm', rVentaController.agendar);

module.exports = router;