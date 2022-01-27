const controller = {};

controller.agendarC = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM cliente', (err, clientes) => {
       if (err) {
        res.json(err);
       }
       res.render('agendarC', {
          data: clientes
          
       });
      });
    });
  };


controller.consult = (req, res) => {
    const params = new URLSearchParams(req.url.split("?")[1]);
    const telefonoA = params.get("Telefono");
    console.log(req.url);
    console.log(params);
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM cliente WHERE Telefono = ?", telefonoA, (err, rows) => {
            if(err){
                res.json(err);
            }else {
            console.log(rows);
            res.render('agendarC.ejs', {
                data: rows[0]
            
            });
        }
        });
    });
};



module.exports = controller;