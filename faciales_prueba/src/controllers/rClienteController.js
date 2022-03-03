const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios_rs.Nombre FROM usuarios_rs INNER JOIN usuarios_rs_has_rol_rs ON usuarios_rs_has_rol_rs.Usuarios_RS_idUsuarios_RS = usuarios_rs.idUsuarios_RS INNER JOIN rol_rs ON rol_rs.idRol_RS = usuarios_rs_has_rol_rs.Rol_RS_idRol_RS WHERE rol_rs.idRol_RS = "2";', (err, asesor_rs) => {
            if (err) {
                res.json(err)
            }
            console.log(asesor_rs);
            res.render('rCliente', {
                rsAs : asesor_rs
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', data, (err, clientes) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(clientes);
                res.redirect('/rCliente');
            }
        });
    })
};

module.exports = controller;