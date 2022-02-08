const router = require('express').Router();

const calendariorcController = require('../controllers/calendariorcController');

router.get('/', calendariorcController.list);
router.post('/add', calendariorcController.agendar);

module.exports = router;