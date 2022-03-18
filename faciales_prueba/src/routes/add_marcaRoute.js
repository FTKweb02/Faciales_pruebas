const router = require('express').Router();

const addmarcaController = require('../controllers/add_marcaController');

router.get('/', addmarcaController.addmarca);
router.post('/add', addmarcaController.save);

module.exports = router;