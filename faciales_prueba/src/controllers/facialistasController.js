const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_rs.startTime, horario_facialista_rs.endTime, horario_facialista_rs.daysOfWeek, facialista_rs.title FROM horario_facialista_rs INNER JOIN facialista_rs ON facialista_rs.id=horario_facialista_rs.Facialista_RS_idFacialista INNER JOIN usuarios_rs ON usuarios_rs.idUsuarios_RS=facialista_rs.Usuarios_RS_idUsuarios_RS;', (err, events) => {
       if (err) {
        res.json(err);
       }
       console.log(JSON.stringify(events));
       res.render('facialistas', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

  controller.getf = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_rs.startTime, horario_facialista_rs.endTime, horario_facialista_rs.daysOfWeek, facialista_rs.title FROM horario_facialista_rs INNER JOIN facialista_rs ON facialista_rs.id=horario_facialista_rs.Facialista_RS_idFacialista INNER JOIN usuarios_rs ON usuarios_rs.idUsuarios_RS=facialista_rs.Usuarios_RS_idUsuarios_RS;', (err, horarios) => {
        if (err) {
          res.json(err);
        }
        console.log(horarios);
        res.redirect('fac_sucursal', {
          datas: JSON.stringify(horarios),
        });
      });
    });
  };

module.exports = controller;