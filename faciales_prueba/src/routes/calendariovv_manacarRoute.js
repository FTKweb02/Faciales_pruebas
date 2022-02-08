const router = require('express').Router();

const calendariovv_manacarController = require('../controllers/calendariovv_manacarController');

router.get('/', calendariovv_manacarController.list);

module.exports = router;