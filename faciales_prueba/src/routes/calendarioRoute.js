const router = require('express').Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/', calendarioController.calendario);
router.post('/add', calendarioController.agendar);
router.get('/update/:id_program', calendarioController.edit);

module.exports = router;