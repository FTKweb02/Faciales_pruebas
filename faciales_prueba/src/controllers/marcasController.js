const controller = {};

controller.config = (req, res) => {req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Resvera', (err, clientes) => {
        if (err) {
            res.json(err);
        }
        res.render('marcas', {
            data: clientes

        });
    });
});
};

module.exports = controller;