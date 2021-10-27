const router = require('express').Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/calendario', calendarioController.calendario);

module.exports = router;