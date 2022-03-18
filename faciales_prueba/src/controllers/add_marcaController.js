const controller = {};

controller.addmarca = (req, res) => {
    res.render('add_marca.ejs');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO marca set ?', data, (err, marcas) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(marcas);
                res.redirect('/marcas');
            }
        });
    })
};

module.exports = controller;