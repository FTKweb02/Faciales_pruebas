const controller = {};

controller.calendariovv = (req, res) => {
    console.log('Estoy en vvcalendario');
    res.render('vvcalendar.ejs');
};

module.exports = controller;