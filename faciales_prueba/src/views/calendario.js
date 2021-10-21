import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import 'react-calendar/dist/Calendar.css';
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,

} from "reactstrap";

function Calendario() {

  /*const fetch = require('node-fetch');

  const url = 'https://agendapro.com/api/public/v1/bookings';
  const options = { method: 'GET', headers: { Accept: 'application/json' } };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));*/

  const history = useHistory();

  return (

    <>
      <div>
        <Navbar className="color-nav" variant="light">
          <Link to="/">
            <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px" />
          </Link>
          <Link to="/">
            <button className="buttonis">Cerrar Sesión</button>
          </Link>
        </Navbar>
      </div>
      <br/>
      <div align="right">
        <button className="menubutton" onClick={() => {
          history.goBack();
        }} type="submit">Menú</button>
      </div>
      <div align="center">
        
      </div>
    </>

  );
}



export default Calendario;