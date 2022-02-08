const router = require('express').Router();

const calendariovvController = require('../controllers/calendariovvController');

router.get('/', calendariovvController.list);
router.post('/add', calendariovvController.agendar);

module.exports = router;