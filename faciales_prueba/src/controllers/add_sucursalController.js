const controller = {};

controller.addsucursal = (req, res) => {
    res.render('add_sucursal.ejs');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO horario_sucursal(idHorario_Sucursal, daysOfWeek, startTime, endTime, Sucursal_idSucursal) VALUES set ?', data, (err, marcas) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(marcas);
                res.redirect('/marcas');
            }
        });
    })
};

module.exports = controller;