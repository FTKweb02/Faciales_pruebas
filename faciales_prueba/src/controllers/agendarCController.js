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
        conn.query("SELECT cliente.idCliente, cliente.Nombre, cliente.Apellidos, cliente.Telefono, cliente.Email, cliente.Dia, cliente.Mes, cliente.Año, cliente.Asesor, cliente.Sucursal, membresia.Folio_membresia, membresia.Fecha_compra, membresia.Nombre_t, membresia.Categoria_t, membresia.Precio_t, membresia.Duracion_t, membresia.Ticket, membresia.Notas, sucursal.idSucursal FROM cliente INNER JOIN membresia ON cliente.idCliente=membresia.Cliente_idCliente INNER JOIN marca ON marca.idMarca = cliente.Marca_idMarca INNER JOIN sucursal ON sucursal.Marca_idMarca = marca.idMarca WHERE cliente.Telefono = ?", telefonoA, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.render('agendarC.ejs', {
                    data: rows[0]

                });
            }
        });
    });
};



module.exports = controller;