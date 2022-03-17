const router = require('express').Router();

const ccenterController = require('../controllers/ccenterController');

router.get('/', ccenterController.ccenter);
router.get('/calendario', ccenterController.calendario);
router.get('/rcliente', ccenterController.rcliente);
router.get('/rventa', ccenterController.rventa);
router.get('/agendarc', ccenterController.agendarc);


module.exports = router;