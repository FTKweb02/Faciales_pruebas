const router = require('express').Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.login);
router.get('/ccenter', loginController.ccenter);

module.exports = router;