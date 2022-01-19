const controller = {};

controller.pendientes = (req, res) => {
    res.render('pendientes.ejs');
};

module.exports = controller;