const controller = {};

controller.calendario = (req, res) => {
    console.log('Estoy en calendario');
    res.render('/calendario');
};

controller.home = (req, res) => {
    res.redirect('/');
}

module.exports = controller;