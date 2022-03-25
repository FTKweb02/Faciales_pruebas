const router = require('express').Router();

const rolController = require('../controllers/rol_userController');

router.get('/', rolController.rol);

module.exports = router;