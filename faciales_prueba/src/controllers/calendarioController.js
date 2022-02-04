const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM calendario_rs', (err, events) => {
       if (err) {
        res.json(err);
       }
       res.render('calendario', {
          data: events,
          
       });
       console.log(JSON.stringify(events));
      });
    });
  };

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario_rs set ?', data, (err, eventos) => {
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