const controller = {};

controller.calendariorc = (req, res) => {
    console.log('Estoy en rccalendario');
    res.render('rccalendar.ejs');
};

module.exports = controller;