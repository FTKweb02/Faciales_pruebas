const controller = {};

controller.rventa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM servicio_rs', (err, servrs) => {
            if (err) {
                res.json(err)
            }else {
                datars = servrs;
                //console.log(datars);
            }
        });
        conn.query('SELECT * FROM servicio_vv', (err, servvv) => {
            if (err) {
                res.json(err)
            }else {
                datavv = servvv
                //console.log(datavv);
            }
        });
        conn.query('SELECT * FROM servicio_rc', (err, servrc) => {
            if (err) {
                res.json(err)
            }else {
                datarc = servrc
                //console.log(datarc);
            }
        });
        conn.query('SELECT * FROM servicio_og', (err, servog) => {
            if (err) {
                res.json(err)
            }else {
                //console.log(servog)
                res.render('rVenta', {
                    dataog : servog
                })
                
            }
        });
    })
    
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