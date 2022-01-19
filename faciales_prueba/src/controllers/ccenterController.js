const controller = {};

controller.ccenter = (req, res) => {
    console.log("Prueba");
    res.render('ccenter.ejs');
};

controller.calendario = (req, res) => {
    res.render('/calendario');
}

controller.rcliente = (req, res) => {
    res.redirect('/rCliente');
}

controller.rventa = (req, res) => {
    res.render('/rVenta');
}

controller.consultarf = (req, res) => {
    res.render('/consultarF');
}

controller.agendarc = (req, res) => {
    res.render('/agendarc');
}

controller.consultarc = (req, res) => {
    res.render('/consultarC');
}

controller.historial = (req, res) => {
    res.render('/historial');
}

module.exports = controller;