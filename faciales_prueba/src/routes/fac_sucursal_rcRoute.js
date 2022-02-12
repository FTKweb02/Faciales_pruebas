const router = require('express').Router();

const fac_sucursal_rcController = require('../controllers/fac_sucursal_rcController');

router.get('/', fac_sucursal_rcController.list);

module.exports = router;