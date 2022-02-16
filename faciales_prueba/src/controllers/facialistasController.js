const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT horario_facialista_vv.startTime, horario_facialista_vv.endTime, horario_facialista_vv.daysOfWeek, facialista_vv.title FROM horario_facialista_vv INNER JOIN facialista_vv ON horario_facialista_vv.Facialista_VV_idFacialista_VV = facialista_vv.id', (err, events) => {
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


module.exports = controller;