const router = require('express').Router();

const calendariovv_insurgentesController = require('../controllers/calendariovv_insurgentesController');

router.get('/', calendariovv_insurgentesController.calendariovv);

module.exports = router;