const router = require('express').Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.login);
router.get('/ccenter', loginController.ccenter);
router.get('/contactc', loginController.contactc);
router.get('/facialista', loginController.facialista);
router.get('/config', loginController.config);

module.exports = router;