const controller = {};

controller.sucursal = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT cabina_rs.idCabina_RS, sucursal_rs.Nombre, sucursal_rs.Direccion, sucursal_rs.Telefono, sucursal_rs.Email FROM sucursal_rs INNER JOIN cabina_rs ON cabina_rs.Sucursal_RS_idSucursal_RS = sucursal_rs.idSucursal_RS ORDER BY cabina_rs.idCabina_RS DESC;', (err, events_rs) => {
            if (err) {
                res.json(err);
            }
            datars = events_rs;
            console.log(events_rs);
        });
        conn.query('SELECT cabina_rc.Nombre, cabina_rc.idCabina_RC, sucursal_rc.Nombre, sucursal_rc.Direccion, sucursal_rc.Telefono, sucursal_rc.Email FROM sucursal_rc INNER JOIN cabina_rc ON cabina_rc.Sucursal_RC_idSucursal_RC = sucursal_rc.idSucursal_RC ORDER BY cabina_rc.idCabina_RC DESC;', (err, events_rc) => {
            if (err) {
                res.json(err);
            }
            datarc = events_rc;
        });
        conn.query('SELECT * FROM sucursal_vv', (err, events_vv) => {
            if (err) {
                res.json(err);
            }
            datavv = events_vv;
        });
        conn.query('SELECT cabina_og.Nombre, cabina_og.idCabina_OG, sucursal_og.Nombre, sucursal_og.Direccion, sucursal_og.Telefono, sucursal_og.Email FROM sucursal_og INNER JOIN cabina_og ON cabina_og.Sucursal_OG_idSucursal_OG = sucursal_og.idSucursal_OG ORDER BY cabina_og.idCabina_OG DESC;', (err, events_og) => {
            if (err) {
                res.json(err);
            }
            res.render('sucursales.ejs', {
                dataog: events_og
            });
        });
    })

};

module.exports = controller;