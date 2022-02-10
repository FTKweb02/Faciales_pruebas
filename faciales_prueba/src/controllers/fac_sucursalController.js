const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_rs.resourceId, horario_facialista_rs.startTime, horario_facialista_rs.endTime, horario_facialista_rs.daysOfWeek, facialista_rs.title, facialista_rs.id, sucursal_rs.Nombre FROM horario_facialista_rs INNER JOIN facialista_rs ON facialista_rs.id=horario_facialista_rs.Facialista_RS_idFacialista INNER JOIN usuarios_rs ON usuarios_rs.idUsuarios_RS=facialista_rs.Usuarios_RS_idUsuarios_RS INNER JOIN sucursal_rs ON usuarios_rs.Sucursal_RS_idSucursal_RS = sucursal_rs.idSucursal_RS;', (err, suc) => {
       if (err) {
        res.json(err);
       }
       console.log(JSON.stringify(suc));
       res.render('fac_sucursal', {
          datas: JSON.stringify(suc), 
       });
      });
    });
  };

module.exports = controller;
