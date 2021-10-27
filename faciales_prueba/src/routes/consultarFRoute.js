const router = require('express').Router();

const consultarf = require('../controllers/consultarFController');

router.get('/', consultarf.consultarf);
router.get('/show', consultarf.show);

module.exports = router;