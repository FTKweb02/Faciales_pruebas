const controller = {};

controller.calendario = (req, res) => {
    res.render('calendario.ejs');
};

module.exports = controller;