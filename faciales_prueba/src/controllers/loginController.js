const controller = {};

controller.login = (req, res) => {
    console.log("Prueba");
    res.render('login.ejs');
};

controller.ccenter = (req, res) => {
    res.redirect('/ccenter');
}

module.exports = controller;