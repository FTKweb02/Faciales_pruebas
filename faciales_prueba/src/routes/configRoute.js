const router = require('express').Router();

const configController = require('../controllers/configController');

router.get('/', configController.config);
router.post('/add', configController.save);

module.exports = router;