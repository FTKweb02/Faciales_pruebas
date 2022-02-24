const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios_rs.Nombre FROM usuarios_rs INNER JOIN usuarios_rs_has_rol_rs ON usuarios_rs_has_rol_rs.Usuarios_RS_idUsuarios_RS = usuarios_rs.idUsuarios_RS INNER JOIN rol_rs ON rol_rs.idRol_RS = usuarios_rs_has_rol_rs.Rol_RS_idRol_RS WHERE rol_rs.idRol_RS = "2";', (err, asesor_rs) => {
            if (err) {
                res.json(err)
            } else {
                rsAs = asesor_rs;
                console.log(asesor_rs);
            }
        });
        conn.query('SELECT usuarios_vv.Nombre FROM usuarios_vv INNER JOIN rol_vv_has_usuarios_vv ON rol_vv_has_usuarios_vv.Usuarios_VV_idUsuarios_VV = usuarios_vv.idUsuarios_VV INNER JOIN rol_vv ON rol_vv.idRol_VV = rol_vv_has_usuarios_vv.Rol_VV_idRol_VV WHERE rol_vv.idRol_VV = "2";', (err, asesor_vv) => {
            if (err) {
                res.json(err)
            }else {
                vvAs = asesor_vv
                console.log(asesor_vv);
            }
        });
        conn.query('SELECT usuarios_og.Nombre FROM usuarios_og INNER JOIN rol_og_has_usuarios_og ON rol_og_has_usuarios_og.Usuarios_OG_idUsuarios_OG = usuarios_og.idUsuarios_OG INNER JOIN rol_og ON rol_og.idRol_OG = rol_og_has_usuarios_og.Rol_OG_idRol_OG WHERE rol_og.idRol_OG = "2";', (err, asesor_og) => {
            if (err) {
                res.json(err)
            }else {
                ogAs = asesor_og
                console.log(asesor_og);
            }
        });   
        conn.query('SELECT usuarios_rc.Nombre FROM usuarios_rc INNER JOIN usuarios_rc_has_rol_rc ON usuarios_rc_has_rol_rc.Usuarios_RC_idUsuarios_RC = usuarios_rc.idUsuarios_RC INNER JOIN rol_rc ON rol_rc.idRol_RC = usuarios_rc_has_rol_rc.Rol_RC_idRol_RC WHERE rol_rc.idRol_RC = "2";', (err, asesor_rc) => {
            if (err) {
                res.json(err);
            }
            console.log(asesor_rc);;
            res.render('rCliente', {
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
                res.redirect('/rCliente');
            }
        });
    })
};

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', data, (err, clientes) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(clientes);
                res.render('agendarC.ejs');
            }
        });
    })
};

module.exports = controller;