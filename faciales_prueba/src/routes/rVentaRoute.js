const router = require('express').Router();

const rVentaController = require('../controllers/rVentaController');

router.get('/', rVentaController.rventa);
router.post('/addm', rVentaController.save);
router.post('/addrc', rVentaController.saverc);
router.post('/addvv', rVentaController.savevv);
router.post('/addog', rVentaController.saveog);


module.exports = router;