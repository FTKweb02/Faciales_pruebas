const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios_rc.Nombre FROM usuarios_rc INNER JOIN usuarios_rc_has_rol_rc ON usuarios_rc_has_rol_rc.Usuarios_RC_idUsuarios_RC = usuarios_rc.idUsuarios_RC INNER JOIN rol_rc ON rol_rc.idRol_RC = usuarios_rc_has_rol_rc.Rol_RC_idRol_RC WHERE rol_rc.idRol_RC = "2";', (err, asesor_rc) => {
            if (err) {
                res.json(err);
            }
            console.log(asesor_rc);;
            res.render('rCliente_rc', {
                rcAs: asesor_rc,
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
                res.redirect('/rCliente_rc');
            }
        });
    })
};

module.exports = controller;