const controller = {};

controller.ccenter = (req, res) => {
    console.log("Prueba");
    res.render('ccenter.ejs');
};

controller.calendario = (req, res) => {
    res.redirect('/calendario');
}

controller.rcliente = (req, res) => {
    res.redirect('/rcliente');
}

controller.rventa = (req, res) => {
    res.redirect('/rventa');
}

controller.consultarf = (req, res) => {
    res.redirect('/consultarf');
}

controller.agendarc = (req, res) => {
    res.redirect('/agendarc');
}

controller.consultarc = (req, res) => {
    res.redirect('/consultarc');
}

controller.historial = (req, res) => {
    res.redirect('/historial');
}

module.exports = controller;