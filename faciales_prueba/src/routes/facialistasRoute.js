const router = require('express').Router();

const facController = require('../controllers/facialistasController');

router.get('/', facController.list);

module.exports = router;