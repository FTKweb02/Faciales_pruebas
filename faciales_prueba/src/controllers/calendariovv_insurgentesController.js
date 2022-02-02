const controller = {};

controller.calendariovv = (req, res) => {
    console.log('Estoy en vvcalendario');
    res.render('vvcalendar_insurgentes.ejs');
};

module.exports = controller;