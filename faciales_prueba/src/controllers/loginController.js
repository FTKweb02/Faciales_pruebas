const controller = {};

controller.login = (req, res) => {
    console.log("Prueba");
    res.render('login.ejs');
};

controller.ccenter = (req, res) => {
    res.render('ccenter.ejs');
}

controller.contactc = (req, res) => {
    res.render('contactc.ejs');
}

controller.facialista = (req, res) => {
    res.render('facialista.ejs');
}

controller.config = (req, res) => {
    res.render('config.ejs');
}

module.exports = controller;