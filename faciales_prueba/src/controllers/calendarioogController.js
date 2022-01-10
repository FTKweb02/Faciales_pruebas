const controller = {};

controller.calendarioog = (req, res) => {
    console.log('Estoy en ogcalendario');
    res.render('ogcalendar.ejs');
};

module.exports = controller;