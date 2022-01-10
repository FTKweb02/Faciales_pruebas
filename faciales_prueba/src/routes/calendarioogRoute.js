const router = require('express').Router();

const calendarioogController = require('../controllers/calendarioogController');

router.get('/', calendarioogController.calendarioog);

module.exports = router;