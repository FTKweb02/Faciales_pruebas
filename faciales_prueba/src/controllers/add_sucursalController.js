const controller = {};

controller.addsucursal = (req, res) => {
    res.render('add_sucursal.ejs');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO horario_sucursal (daysOfWeek, startTime, endTime) VALUES ?', data, (err, horarios) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(horarios);
                res.redirect('/marcas');
            }
        });
    })
};

module.exports = controller;