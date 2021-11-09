const controller = {};

controller.ccenter = (req, res) => {
    console.log("Prueba");
    res.render('ccenter.ejs');
};

controller.calendario = (req, res) => {
    res.render('/calendario');
}

controller.rcliente = (req, res) => {
    res.render('rCliente.ejs');
}

controller.rventa = (req, res) => {
    res.render('rVenta.ejs');
}

controller.consultarf = (req, res) => {
    res.render('consultarF.ejs');
}

controller.agendarc = (req, res) => {
    res.render('agendarc.ejs');
}

controller.consultarc = (req, res) => {
    res.render('consultarC.ejs');
}

controller.historial = (req, res) => {
    res.render('historial.ejs');
}

module.exports = controller;