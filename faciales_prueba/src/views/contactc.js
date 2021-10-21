import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar

} from "reactstrap";


class Contactc extends React.Component {


  render() {


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

        <Container align="center" className="botomnes">
          <br/>
          <h1>Menú</h1>
          <br />
          <Link to="/agendarc">
            <button>Agendar</button>
          </Link>
          <br/>
          <br/>
          <Link to="/rventa">
            <button>Registrar Membresía</button>
          </Link>
          <br/>
          <br/>
          <Link to="/pendientes">
            <button>Pendientes</button>
          </Link>
          <br/>
          <br/>
          <Link to="/calendario">
            <button>Calendario</button>
          </Link>
          <br/>
          <br/>
          <Link to="/clientescc">
            <button>Clientes</button>
          </Link>
          <br/>
          <br/>
        </Container>


      </>
    );
  }
}

export default Contactc;
