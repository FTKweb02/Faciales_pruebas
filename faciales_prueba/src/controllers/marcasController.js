const controller = {};

controller.config = (req, res) => {req.getConnection((err, conn) => {
    conn.query('SELECT * FROM sucursal ORDER BY idSucursal DESC', (err, suc) => {
        if (err) {
            res.json(err);
        }
        console.log(suc);
        datas = suc
    });
    conn.query('SELECT * FROM marca', (err, marca) => {
        if (err) {
            res.json(err);
        }
        console.log(marca);
        res.render('marcas', {
            data: marca

        });
    });
});
};

module.exports = controller;