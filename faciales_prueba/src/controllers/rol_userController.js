const controller = {};

controller.rol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios.idUsuarios, usuarios.Nombre, rol.Tipo FROM usuarios INNER JOIN rol INNER JOIN usuarios_has_rol ON usuarios.idUsuarios = usuarios_has_rol.Usuarios_idUsuarios AND rol.idRol = usuarios_has_rol.Rol_idRol;', (err, rol) => {
            if (err) {
                res.json(err);
            }
            console.log(rol);
            res.render('rol_user', {
                data: rol
            });
        });
    });
};

module.exports = controller;