const router = require('express').Router();

const fac_sucursal_ogController = require('../controllers/fac_sucursal_ogController');

router.get('/', fac_sucursal_ogController.list);

module.exports = router;