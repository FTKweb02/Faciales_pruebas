const router = require('express').Router();

const citfacController = require('../controllers/citfacController');

router.get('/', citfacController.citfac);

module.exports = router;