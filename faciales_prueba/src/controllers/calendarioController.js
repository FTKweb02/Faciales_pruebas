const controller = {};

controller.calendario = (req, res) => {
    console.log('Estoy en calendario');
    res.render('calendario.ejs');
};

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO events set ?', data, (err, eventos) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(eventos);
                res.render('calendario.ejs');
            }
        });
    })
};

controller.edit = (req, res) => {
    const { id_event } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM program WHERE id = ?", id_event, (err, rows) => {
        res.render('calendario.ejs', {
          data: rows[0]
        })
      });
    });
  };

module.exports = controller;