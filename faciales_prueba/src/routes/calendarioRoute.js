const router = require('express').Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/', calendarioController.calendario);

module.exports = router;