const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_og.resourceId, horario_facialista_og.startTime, horario_facialista_og.endTime, horario_facialista_og.daysOfWeek, facialista_og.title, facialista_og.id, sucursal_og.Nombre FROM horario_facialista_og INNER JOIN facialista_og ON facialista_og.id=horario_facialista_og.Facialista_OG_idFacialista_OG INNER JOIN usuarios_og ON usuarios_og.idUsuarios_OG=facialista_og.Usuarios_OG_idUsuarios_OG INNER JOIN sucursal_og ON usuarios_og.Sucursal_OG_idSucursal_OG = sucursal_og.idSucursal_OG;', (err, suc) => {
       if (err) {
        res.json(err);
       }
       console.log(JSON.stringify(suc));
       res.render('fac_sucursal_og', {
          datas: JSON.stringify(suc), 
       });
      });
    });
  };

module.exports = controller;
