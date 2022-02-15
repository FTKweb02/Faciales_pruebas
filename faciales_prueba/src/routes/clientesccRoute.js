const router = require('express').Router();

const clientesccController = require('../controllers/clientesccController');

router.get('/', clientesccController.clientescc);
router.get('/consult/', clientesccController.consult);

module.exports = router;