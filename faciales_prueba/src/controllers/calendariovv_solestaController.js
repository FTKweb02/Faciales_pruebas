const controller = {};

controller.calendariovv = (req, res) => {
    console.log('Estoy en vvcalendario');
    res.render('vvcalendar_solesta.ejs');
};

module.exports = controller;