const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myConnection');


const app = express();

//importing routes 
//const loginRoutes = require('./routes/loginRoute');
const agendarCRoutes = require('./routes/agendarCRoute');
const calendarioRoutes = require('./routes/calendarioRoute');
const ccenterRoutes = require('./routes/ccenterRoute');
/*const citafacRoutes = require('./routes/citafacRoute');
const citfacRoutes = require('./routes/citfacRoute');
const clientesccRoutes = require('./routes/clientesccRoute');
const configRoutes = require('./routes/configRoute');*/
const consultarCRoutes = require('./routes/consultarCRoute');
const consultarFRoutes = require('./routes/consultarFRoute');
//const contactcRoutes = require('./routes/contactcRoute');
//const facialistaRoutes = require('./routes/facialistaRoute');
const historialRoutes = require('./routes/historialRoute');
//const pendientesRoutes = require('./routes/pendientesRoute');
const rClienteRoutes = require('./routes/rClienteRoute');
const rVentaRoutes = require('./routes/rVentaRoute');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'Admin_02',
  password: 'L5u9aA-@m/C3DgsK',
  port: 3306,
  database: 'faciales'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
//app.use('/login', loginRoutes);
app.use('/', agendarCRoutes);
app.use('/calendario', calendarioRoutes);
app.use('/ccenter', ccenterRoutes);
/*app.use('/citafac', citafacRoutes);
app.use('/citfac', citfacRoutes);
app.use('/clientescc', clientesccRoutes);
app.use('/config', configRoutes);*/
app.use('/consultarC', consultarCRoutes);
app.use('/consultarF', consultarFRoutes);
//app.use('/contactc', contactcRoutes);
//app.use('/facialista', facialistaRoutes);
app.use('/historial', historialRoutes);
//app.use('/pendientes', pendientesRoutes);
app.use('/rCliente', rClienteRoutes);
app.use('/rVenta', rVentaRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
})

