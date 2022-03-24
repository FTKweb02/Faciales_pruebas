const controller = {};

controller.usuarios = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios.*, sucursal.Nombre_s, marca.Nombre_m FROM usuarios INNER JOIN sucursal ON sucursal.idSucursal = usuarios.Sucursal_idSucursal INNER JOIN marca ON marca.idMarca = sucursal.Marca_idMarca;', (err, usuario) => {
            if (err) {
                res.json(err);
            }
            console.log(usuario);
            res.render('usuarios', {
                data: usuario
            });
        });
    });
};

module.exports = controller;