const controller = {};

controller.agendarC = (req, res) => {
    res.render('agendarC.ejs');
};

controller.consultarc = (req, res) => {
    const { Telefono } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM cliente WHERE Telefono = ?", Telefono, (err, rows) => {
            res.render('agendarC.ejs', {
                data: rows[0]
            })
            console.log(rows);
        })
    })
}

module.exports = controller;