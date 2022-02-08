const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM calendario_vv WHERE Sucursal_VV_idSucursal_VV = 4', (err, events) => {
       if (err) {
        res.json(err);
       }
       res.render('vvcalendar', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario_vv set ?', data, (err, eventos) => {
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