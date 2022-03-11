const controller = {};

controller.addsucursal = (req, res) => {
    res.render('add_sucursal.ejs');
};

module.exports = controller;