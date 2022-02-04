const controller = {};

controller.config = (req, res) => {
    res.render('config.ejs');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facialista_rs set ?', data, (err, clientes) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(clientes);
                res.redirect('/config');
            }
        });
    })
};

module.exports = controller;