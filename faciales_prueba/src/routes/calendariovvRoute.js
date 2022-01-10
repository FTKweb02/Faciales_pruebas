const router = require('express').Router();

const calendariovvController = require('../controllers/calendariovvController');

router.get('/', calendariovvController.calendariovv);

module.exports = router;