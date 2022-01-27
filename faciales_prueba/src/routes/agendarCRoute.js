const router = require('express').Router();

const agendarcController = require('../controllers/agendarcController');

router.get('/', agendarcController.agendarC);
router.get('/consult/', agendarcController.consult)

module.exports = router;