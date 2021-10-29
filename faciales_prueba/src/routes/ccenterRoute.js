const router = require('express').Router();

const ccenterController = require('../controllers/ccenterController');

router.get('/ccenter', ccenterController.ccenter);
router.get('/calendario', ccenterController.calendario);
router.get('/rcliente', ccenterController.rcliente);
router.get('/rventa', ccenterController.rventa);
router.get('/consultarf', ccenterController.consultarf);
router.get('/agendarc', ccenterController.agendarc);
router.get('/consultarc', ccenterController.consultarc);
router.get('/historial', ccenterController.historial);


module.exports = router;