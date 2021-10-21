import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col,

} from "reactstrap";

function Rcliente() {

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
      <Container>
        <Row>
          <Col></Col>
          <Col sm={10} align="center"><h1>Registrar Cliente</h1></Col>
          <Col><button className="menubutton" onClick={() => {
            history.goBack();
          }} type="submit">Menú</button></Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <form method="post">
        <Container fluid>
          <Row>
            <Col align="center">
              <label><b>Marca: </b></label>
              <br/>
              <select>
                <option selected="selected" value=""></option>
                <option value="sucursal1">VV</option>
                <option value="sucursal2">OG</option>
                <option value="sucursal3">RC</option>
                <option value="sucursal3">RS</option>
                <option value="sucursal3">UMAF</option>
                <option value="sucursal3">VVEXP</option>
              </select>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col align="center">
              <label><b>Sucursal: </b></label>
              <br/>
              <select>
                <option selected="selected" value=""></option>
                <option value="sucursal1">Sucursal 1</option>
                <option value="sucursal2">Sucursal 2</option>
                <option value="sucursal3">Sucursal 3</option>
              </select>
              <br/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col align="center">
              <label><b>Asesor: </b></label>
              <br/>
              <select>
                <option selected="selected" value=""></option>
                <option value="asesor1">Asesor 1</option>
                <option value="asesor2">Asesor 2</option>
                <option value="asesor3">Asesor 3</option>
              </select></Col>
          </Row>
          <br/>
          <Row>
            <Col align="center">
              <input type="text" placeholder="Nombre" required></input>
              <br/>
              <br/>
              <input type="text" placeholder="Apellidos" required></input>
              <br/>
              <br/>
              <label><b>Cumpleaños: </b></label>
              <br/>
              <input type="date" required></input>
              <br/>
              <br/>
              <input type="tel" placeholder="Teléfono 10 digitos" required-pattern="[0-9]{10}"></input>
              <br/>
              <br/>
              <input type="email" placeholder="E-mail" required></input>
              <br/>
              <br/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="1">
              <button className="buttonis" type="submit" name="guardar">Guardar</button><br/>
            </Col>
            <Col xs lg="1">
              <button className="buttonis" type="submit" name="regyage">Guardar&nbsp;y&nbsp;Agendar</button>
            </Col>
          </Row>
          <br/>
        </Container>
      </form>
    </>
  );
}

export default Rcliente;