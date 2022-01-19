const router = require('express').Router();

const facialistaController = require('../controllers/facialistaController');

router.get('/', facialistaController.facialista);

module.exports = router;