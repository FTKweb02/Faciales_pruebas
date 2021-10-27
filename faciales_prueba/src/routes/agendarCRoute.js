const router = require('express').Router();

const agendarcController = require('../controllers/agendarcController');

router.get('/', agendarcController.agendarC);

module.exports = router;