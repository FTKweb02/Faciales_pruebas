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
const calendariovv_insurgentesRoutes = require('./routes/calendariovv_insurgentesRoute');
const calendariovv_manacarRoutes = require('./routes/calendariovv_manacarRoute');
const calendariovv_solestaRoutes = require('./routes/calendariovv_solestaRoute');
const calendarioogRoutes = require('./routes/calendarioogRoute');
const calendariorcRoutes = require('./routes/calendariorcRoute');
const ccenterRoutes = require('./routes/ccenterRoute');
const facialistasRoutes = require('./routes/facialistasRoute');
const fac_sucursalRoutes = require('./routes/fac_sucursalRoute');
const fac_sucursal_vvRoutes = require('./routes/fac_sucursal_vvRoute');
const fac_sucursal_ogRoutes = require('./routes/fac_sucursal_ogRoute');
const fac_sucursal_rcRoutes = require('./routes/fac_sucursal_rcRoute');
const clientesccRoutes = require('./routes/clientesccRoute');
const configRoutes = require('./routes/configRoute');
const marcasRoutes = require('./routes/marcasRoute');
const contactcRoutes = require('./routes/contactcRoute');
const historialRoutes = require('./routes/historialRoute');
const pendientesRoutes = require('./routes/pendientesRoute');
const rClienteRoutes = require('./routes/rClienteRoute');
const rCliente_vvRoutes = require('./routes/rCliente_vvRoute');
const rCliente_ogRoutes = require('./routes/rCliente_ogRoute');
const rCliente_rcRoutes = require('./routes/rCliente_rcRoute');
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
app.use('/vvcalendar_insurgentes', calendariovv_insurgentesRoutes);
app.use('/vvcalendar_manacar', calendariovv_manacarRoutes);
app.use('/vvcalendar_solesta', calendariovv_solestaRoutes);
app.use('/ogcalendar', calendarioogRoutes);
app.use('/rccalendar', calendariorcRoutes);
app.use('/ccenter', ccenterRoutes);
app.use('/facialistas', facialistasRoutes);
app.use('/fac_sucursal', fac_sucursalRoutes);
app.use('/fac_sucursal_vv', fac_sucursal_vvRoutes);
app.use('/fac_sucursal_og', fac_sucursal_ogRoutes);
app.use('/fac_sucursal_rc', fac_sucursal_rcRoutes);
app.use('/clientescc', clientesccRoutes);
app.use('/config', configRoutes);
app.use('/marcas', marcasRoutes);
app.use('/contactc', contactcRoutes);
app.use('/historial', historialRoutes);
app.use('/pendientes', pendientesRoutes);
app.use('/rCliente', rClienteRoutes);
app.use('/rCliente_vv', rCliente_vvRoutes);
app.use('/rCliente_og', rCliente_ogRoutes);
app.use('/rCliente_rc', rCliente_rcRoutes);
app.use('/rVenta', rVentaRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
  console.log('Si servio!!')
})

