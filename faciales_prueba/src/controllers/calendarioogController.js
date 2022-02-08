const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM calendario_og', (err, events) => {
       if (err) {
        res.json(err);
       }
       res.render('ogcalendar', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario_og set ?', data, (err, eventos) => {
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