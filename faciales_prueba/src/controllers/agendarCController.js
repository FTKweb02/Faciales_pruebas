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
    req.getConnection((err, conn) => {
        conn.query("SELECT cliente.idCliente, cliente.Nombre, cliente.Apellidos, cliente.Telefono, cliente.Email, cliente.Dia, cliente.Mes, cliente.Año, cliente.Asesor, cliente.Sucursal, membresia_rs.Folio_membresia, membresia_rs.Fecha_compra, membresia_rs.Nombre_t, membresia_rs.Categoria_t, membresia_rs.Precio_t, membresia_rs.Duracion_t, membresia_rs.Ticket, membresia_rs.Notas, sucursal_rs.idSucursal_RS FROM cliente INNER JOIN membresia_rs ON cliente.idCliente=membresia_rs.Cliente_idCliente INNER JOIN resvera ON resvera.idResvera = cliente.Resvera_idResvera INNER JOIN sucursal_rs ON sucursal_rs.Resvera_idResvera = resvera.idResvera WHERE cliente.Telefono = ?", telefonoA, (err, rows) => {
            if (err) {
                window.alert("El cliente seleccionado no tiene tratamientos registrados");
                window.history.back();
            } else {
                res.render('agendarC.ejs', {
                    data: rows[0]

                });
            }
        });
    });
};



module.exports = controller;