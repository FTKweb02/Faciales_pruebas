const router = require('express').Router();

const calendariovv_solestaController = require('../controllers/calendariovv_solestaController');

router.get('/', calendariovv_solestaController.calendariovv);

module.exports = router;