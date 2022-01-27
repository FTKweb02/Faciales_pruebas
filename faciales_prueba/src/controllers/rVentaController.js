const controller = {};

controller.rventa = (req, res) => {
    res.render('rVenta');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia_rs set ?', data, (err, membresias) => {
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

controller.saverc = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia_rc set ?', data, (err, membresias) => {
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

controller.savevv = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia_vv set ?', data, (err, membresias) => {
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

controller.saveog = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia_og set ?', data, (err, membresias) => {
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

module.exports = controller;