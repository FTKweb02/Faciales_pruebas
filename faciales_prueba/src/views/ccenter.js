import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col

} from "reactstrap";


class Ccenter extends React.Component {


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
          <h1 align="center">Menú</h1>
          <br/>
          <br/>

        <Container align="center" className="botomnes">

          <Row>
            <Col>
          <Link to="/calendario">
            <button>Calendario</button>
          </Link>
          <br/>
          </Col>
          <br/>
          <br/>
          <Col>
          <Link to="/rcliente">
            <button>Registrar Cliente</button>
          </Link>
          <br/>
          </Col>
          </Row>
          <br/>
          <Row>
            <Col>
          <Link to="/rventa">
            <button>Registrar Membresia</button>
          </Link>
          <br/>
          </Col>
          <br/>
          <br/>
          <Col>
          <Link to="/consultarf">
            <button>Consultar Folio</button>
          </Link>
          <br/>
          </Col>
          </Row>
          <br/>
          <Row>
            <Col>
          <Link to="/agendarc">
            <button>Agendar Cita</button>
          </Link>
          <br/>
          </Col>
          <br/>
          <br/>
          <Col>
          <Link to="/consultarc">
            <button className="button" type="submit">Consultar Cita</button>
          </Link>
          <br/>
          </Col>
          </Row>
          <br/>
          <Row>
            <Col>
          <Link to="/historial">
            <button className="button" type="submit">Mi historial</button>
          </Link>
          </Col>
          <Col><button className="buttonh" type="submit" disabled value></button></Col>
          </Row>

        </Container>
        <br/>
      </>
    );
  }
}

export default Ccenter;
