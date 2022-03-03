const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios_vv.Nombre FROM usuarios_vv INNER JOIN rol_vv_has_usuarios_vv ON rol_vv_has_usuarios_vv.Usuarios_VV_idUsuarios_VV = usuarios_vv.idUsuarios_VV INNER JOIN rol_vv ON rol_vv.idRol_VV = rol_vv_has_usuarios_vv.Rol_VV_idRol_VV WHERE rol_vv.idRol_VV = "2";', (err, asesor_vv) => {
            if (err) {
                res.json(err)
            } 
            console.log(asesor_vv);
            res.render('rCliente_vv', {
                vvAs : asesor_vv
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
                res.redirect('/rCliente_vv');
            }
        });
    })
};

module.exports = controller;