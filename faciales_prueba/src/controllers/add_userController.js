const controller = {};

controller.adduser = (req, res) => {
    res.render('add_user.ejs');
};

module.exports = controller;