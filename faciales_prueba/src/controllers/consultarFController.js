const controller = {};

controller.consultarf = (req, res) => {
    res.render('consultarF.ejs');
};

controller.show = (req, res) => {
    const { folio_membresia } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM membresia WHERE folio_membresia = ?", folio_membresia, (err, rows) =>{
            res.render('membresia', {
                data: rows[0]
            })
        });
    });
}

module.exports = controller;