const router = require('express').Router();

const citafacController = require('../controllers/citafacController');

router.get('/', citafacController.citafac);

module.exports = router;