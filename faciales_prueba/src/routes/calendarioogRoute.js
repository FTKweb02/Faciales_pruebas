const router = require('express').Router();

const calendarioogController = require('../controllers/calendarioogController');

router.get('/', calendarioogController.list);
router.post('/add', calendarioogController.agendar);

module.exports = router;