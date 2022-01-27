const router = require('express').Router();

const agendarcController = require('../controllers/agendarcController');

router.get('/', agendarcController.agendarC);
router.get('/consult/:Telefono', agendarcController.consult)

module.exports = router;