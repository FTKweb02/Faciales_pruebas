const controller = {};

controller.agendarC = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            res.render('agendarC', {
                data: clientes

            });
        });
    });
};


controller.consult = (req, res) => {
    const params = new URLSearchParams(req.url.split("?")[1]);
    const telefonoA = params.get("Telefono");
    console.log(req.url);
    console.log(params);
    req.getConnection((err, conn) => {
        conn.query("SELECT cliente.idCliente, cliente.Nombre, cliente.Apellidos, cliente.Telefono, cliente.Email, cliente.Dia, cliente.Mes, cliente.Año, cliente.Asesor, membresia_rs.Folio_membresia, membresia_rs.Fecha_compra, membresia_rs.Nombre_t, membresia_rs.Categoria_t, membresia_rs.Precio_t, membresia_rs.Duracion_t, membresia_rs.Ticket, membresia_rs.Notas, membresia_rs.Sucursal FROM cliente INNER JOIN membresia_rs ON cliente.idCliente=membresia_rs.Cliente_idCliente WHERE Telefono = ?", telefonoA, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('agendarC.ejs', {
                    data: rows[0]

                });
            }
        });
    });
};



module.exports = controller;