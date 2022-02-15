const controller = {};

controller.clientescc = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            console.log(clientes);
            res.render('clientescc', {
                data: clientes
            });
        });
    });
};

controller.consult = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM cliente WHERE idCliente = 4", (err, clientescc) => {
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('clientescc', {
                    data: clientescc

                });
            }
        });
    });
};
module.exports = controller;