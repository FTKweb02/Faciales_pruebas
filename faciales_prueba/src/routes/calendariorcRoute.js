const router = require('express').Router();

const calendariorcController = require('../controllers/calendariorcController');

router.get('/', calendariorcController.calendariorc);

module.exports = router;