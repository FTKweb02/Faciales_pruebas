const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT horario_barberos_rc.resourceId, horario_barberos_rc.startTime, horario_barberos_rc.endTime, horario_barberos_rc.daysOfWeek, barberos_rc.title, barberos_rc.id, sucursal_rc.Nombre FROM horario_barberos_rc INNER JOIN barberos_rc ON barberos_rc.id = horario_barberos_rc.Barberos_RC_idBarberos_RC INNER JOIN usuarios_rc ON usuarios_rc.idUsuarios_RC = barberos_rc.Usuarios_RC_idUsuarios_RC INNER JOIN sucursal_rc ON usuarios_rc.Sucursal_RC_idSucursal_RC = sucursal_rc.idSucursal_RC; ', (err, suc) => {
    if (err) {
      res.json(err);
    }
    console.log(JSON.stringify(suc));
    res.render('fac_sucursal_rc', {
      datas: JSON.stringify(suc),
    });
  });
});
  };

module.exports = controller;
