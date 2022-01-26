const router = require('express').Router();

const agendarcController = require('../controllers/agendarcController');

router.get('/', agendarcController.agendarC);
router.get('/consultarc/:Telefono', agendarcController.consultarc)

module.exports = router;