const router = require('express').Router();

const consultarcController = require('../controllers/consultarCController');

router.get('/', consultarcController.consultarC);

module.exports = router;