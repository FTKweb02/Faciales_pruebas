const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM barberos_rc', (err, servrc) => {
            if (err) {
                res.json(err)
            }else {
                datarc = servrc
                //console.log(datarc);
            }
        });
      conn.query('SELECT * FROM calendario_rc', (err, events) => {
       if (err) {
        res.json(err);
       }
       res.render('rccalendar', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario_rc set ?', data, (err, eventos) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(eventos);
                res.render('ccenter');
            }
        });
    })
};

module.exports = controller;