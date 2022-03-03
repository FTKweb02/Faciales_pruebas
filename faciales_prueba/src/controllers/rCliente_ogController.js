const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios_og.Nombre FROM usuarios_og INNER JOIN rol_og_has_usuarios_og ON rol_og_has_usuarios_og.Usuarios_OG_idUsuarios_OG = usuarios_og.idUsuarios_OG INNER JOIN rol_og ON rol_og.idRol_OG = rol_og_has_usuarios_og.Rol_OG_idRol_OG WHERE rol_og.idRol_OG = "2";', (err, asesor_og) => {
            if (err) {
                res.json(err)
            }
            console.log(asesor_og);
            res.render('rCliente_og', {
                ogAs : asesor_og
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
                res.redirect('/rCliente_og');
            }
        });
    })
};

module.exports = controller;