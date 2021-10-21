import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col,

} from "reactstrap";


class Config extends React.Component {


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
        <br/>
        <Container align="center" className="botomnes">
          <br/>
          <h1>Configuración</h1>
          <br/>
          <br/>
          <Row>
            <Col><Link to="/">
              <button>Marca</button>
            </Link></Col>
            <br/>
            <br/>
            <Col><Link to="/">
              <button>Usuario</button>
            </Link></Col>
          </Row>
          <br/>
          <Row>
            <Col><Link to="/">
              <button>Sucursal</button>
            </Link></Col>
            <br/>
            <br/>
            <Col><Link to="/">
              <button>Tecnología</button>
            </Link></Col>
          </Row>
          <br/>
          <Row>
            <Col><Link to="/">
              <button>Servicio/Tratamiento</button>
            </Link></Col>
            <br/>
            <br/>
            <Col><button className="buttonh" disabled></button></Col>
          </Row>
          <br/>
        </Container>

      </>
    );
  }
}

export default Config;
