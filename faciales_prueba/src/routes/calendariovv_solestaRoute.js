const router = require('express').Router();

const calendariovv_solestaController = require('../controllers/calendariovv_solestaController');

router.get('/', calendariovv_solestaController.list);
router.post('/add', calendariovv_solestaController.agendar);

module.exports = router;