const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_vv.resourceId, horario_facialista_vv.startTime, horario_facialista_vv.endTime, horario_facialista_vv.daysOfWeek, facialista_vv.title, facialista_vv.id, sucursal_vv.Nombre FROM horario_facialista_vv INNER JOIN facialista_vv ON facialista_vv.id=horario_facialista_vv.Facialista_VV_idFacialista_VV INNER JOIN usuarios_vv ON usuarios_vv.idUsuarios_VV=facialista_vv.Usuarios_VV_idUsuarios_VV INNER JOIN sucursal_vv ON usuarios_vv.Sucursal_VV_idSucursal_VV = sucursal_vv.idSucursal_VV;', (err, suc) => {
       if (err) {
        res.json(err);
       }
       console.log(JSON.stringify(suc));
       res.render('fac_sucursal_vv', {
          datas: JSON.stringify(suc), 
       });
      });
    });
  };

module.exports = controller;
