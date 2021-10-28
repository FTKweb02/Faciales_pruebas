const router = require('express').Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/', calendarioController.calendario);
router.get('/ccenter', calendarioController.home);

module.exports = router;