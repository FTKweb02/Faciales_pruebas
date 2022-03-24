const router = require('express').Router();

const adduserController = require('../controllers/add_userController');

router.get('/', adduserController.adduser);

module.exports = router;