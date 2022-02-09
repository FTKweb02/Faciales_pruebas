const router = require('express').Router();

const fac_sucursalController = require('../controllers/fac_sucursalController');

router.get('/', fac_sucursalController.fac_sucursal);

module.exports = router;