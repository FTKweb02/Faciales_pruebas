const router = require('express').Router();

const fac_sucursal_vvController = require('../controllers/fac_sucursal_vvController');

router.get('/', fac_sucursal_vvController.list);

module.exports = router;