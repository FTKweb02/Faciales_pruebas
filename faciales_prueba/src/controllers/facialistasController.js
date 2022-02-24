const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT calendario_rs.start, calendario_rs.end, facialista_rs.title, cabina_rs.Nombre FROM calendario_rs  INNER JOIN facialista_rs ON calendario_rs.title = facialista_rs.title INNER JOIN cabina_rs ON calendario_rs.resourceId = cabina_rs.idCabina_RS WHERE facialista_rs.title = "Brenda"', (err, citfac) => {
        if (err) {
            res.json(err)
        }else {
            datafac = JSON.stringify(citfac);
            console.log(datafac);
        }
    });
      conn.query('SELECT horario_facialista_vv.startTime, horario_facialista_vv.endTime, horario_facialista_vv.daysOfWeek, facialista_vv.title FROM horario_facialista_vv INNER JOIN facialista_vv ON horario_facialista_vv.Facialista_VV_idFacialista_VV = facialista_vv.id', (err, events) => {
       if (err) {
        res.json(err);
       }
       //console.log(JSON.stringify(events));
       res.render('facialistas', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

  controller.mostrar = (req, res) => {
    req.getConnection((err, connection) => {
      conn.query('SELECT calendario_rs.start, calendario_rs.end, facialista_rs.title, cabina_rs.Nombre FROM calendario_rs  INNER JOIN facialista_rs ON calendario_rs.title = facialista_rs.title INNER JOIN cabina_rs ON calendario_rs.resourceId = cabina_rs.idCabina_RS WHERE facialista_rs.title = "?"', (err, result) => {
        if (err) {
          res.json(err);
        }else {
          mostrar = result;
        }
      })
    })
  }


module.exports = controller;