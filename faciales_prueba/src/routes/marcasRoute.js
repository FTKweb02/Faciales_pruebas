const router = require('express').Router();

const marcasController = require('../controllers/marcasController');

router.get('/', marcasController.config);

module.exports = router;