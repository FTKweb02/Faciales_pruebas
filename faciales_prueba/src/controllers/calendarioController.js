const controller = {};

controller.calendario = (req, res) => {
    console.log('Estoy en calendario');
    res.render('calendario.ejs');
};

module.exports = controller;