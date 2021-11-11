const controller = {};

controller.rventa = (req, res) => {
    res.render('rVenta');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia set ?', data, (err, membresias) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(membresias);
                req.flash('success', `You've been successfully redirected to the Message route!`);
                res.redirect('/rVenta');
            }
        });
    })
};

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia set ?', data, (err, membresias) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(membresias);
                res.redirect('/agendarC');
            }
        });
    })
};

module.exports = controller;