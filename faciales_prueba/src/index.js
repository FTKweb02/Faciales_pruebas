const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myConnection'),
      flash = require('connect-flash');
      session = require('express-session');


const app = express();

//importing routes 
const loginRoutes = require('./routes/loginRoute');
const agendarCRoutes = require('./routes/agendarCRoute');
const calendarioRoutes = require('./routes/calendarioRoute');
const calendariovvRoutes = require('./routes/calendariovvRoute');
const calendarioogRoutes = require('./routes/calendarioogRoute');
const calendariorcRoutes = require('./routes/calendariorcRoute');
const ccenterRoutes = require('./routes/ccenterRoute');
const citafacRoutes = require('./routes/citafacRoute');
const citfacRoutes = require('./routes/citfacRoute');
const clientesccRoutes = require('./routes/clientesccRoute');
const configRoutes = require('./routes/configRoute');
const contactcRoutes = require('./routes/contactcRoute');
const facialistaRoutes = require('./routes/facialistaRoute');
const historialRoutes = require('./routes/historialRoute');
const pendientesRoutes = require('./routes/pendientesRoute');
const rClienteRoutes = require('./routes/rClienteRoute');
const rVentaRoutes = require('./routes/rVentaRoute');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'codeforgeek',
  saveUninitialized: true,
  resave: true
}));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'Admin_02',
  password: 'L5u9aA-@m/C3DgsK',
  port: 3306,
  database: 'mydb'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use(flash());

//routes
app.use('/', loginRoutes);
app.use('/agendarC', agendarCRoutes);
app.use('/calendario', calendarioRoutes);
app.use('/vvcalendar', calendariovvRoutes);
app.use('/ogcalendar', calendarioogRoutes);
app.use('/rccalendar', calendariorcRoutes);
app.use('/ccenter', ccenterRoutes);
app.use('/citafac', citafacRoutes);
app.use('/citfac', citfacRoutes);
app.use('/clientescc', clientesccRoutes);
app.use('/config', configRoutes);
app.use('/contactc', contactcRoutes);
app.use('/facialista', facialistaRoutes);
app.use('/historial', historialRoutes);
app.use('/pendientes', pendientesRoutes);
app.use('/rCliente', rClienteRoutes);
app.use('/rVenta', rVentaRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
  console.log('Si servio!!')
})

