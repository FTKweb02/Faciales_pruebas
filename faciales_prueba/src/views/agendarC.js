import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Row,
  Col,
  Container

} from "reactstrap";

function Agendarc() {

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
      <br/>
      <h1 align="center">Agendar</h1>
      <br/>
      <Form action="post">
        <Container align="center" fluid>
          <Row>
            <Col>
              <input type="text" placeholder="Nombre" required></input>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" placeholder="Apellido" required></input>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <label for="tec">Tecnologías</label><br/>
              <input type="radio" name="tratamiento" value="tec"></input>
            </Col>
            <Col>
              <label for="faciales">Faciales</label><br/>
              <input type="radio" name="tratamiento" value="faciales"></input>
            </Col>
            <Col>
              <label for="mesvirt">Mesoterapia</label><br/>
              <input type="radio" name="tratamiento" value="meso"></input>
            </Col>
            <Col>
              <label for="ME">Medicina Estética</label><br/>
              <input type="radio" disabled name="tratamiento" value="ME"></input>
            </Col>
          </Row>
          <Row>
            <Col>
              <select>
                <option disabled selected>Tecnologías</option>
                <option value="">Reskin</option>
                <option value="">Reskin (Avanzado)</option>
                <option value="">Skin Glow</option>
                <option value=" ">Skin Glow (Avanzado)</option>
                <option value=" ">Diamond Lifting</option>
                <option value=" ">Diamond Lifting (Avanzado)</option>
                <option value=" ">Skin Renew</option>
                <option value=" ">Skin Renew (avanzado9</option>
                <option value=" ">Luxe Resurfacing</option>
                <option value=" ">A New Beginning</option>
              </select>
            </Col>
            <Col>
              <select>
                <option disabled selected>Faciales</option>
                <option value="">Facial Hydratance</option>
                <option value="">Facial Hydratance (Avanzado)</option>
                <option value="">Facial Lifting</option>
                <option value="">Facial Petal Peel</option>
                <option value=" ">Facial Aqua Lift</option>
                <option value=" ">Deep Cleanse</option>
                <option value=" ">Facial Magnetic Detox</option>
                <option value=" ">Nefertiti Experience</option>
              </select>
            </Col>
            <Col>
              <select>
                <option disabled selected>Mesoterapia</option>
                <option value="">D pigment</option>
                <option value="">Radiance Skin</option>
                <option value="">Skin Light</option>
                <option value="">Vitality Facial</option>
              </select>
            </Col>
            <Col>
              <select>
                <option disabled selected>Médicina Estética</option>
              </select>
            </Col>
          </Row>
          <br/>
          <label for="date">Horario:</label><br/>
          <input type="datetime-local" value="date" id="start"></input><br/>
          <br/>
          <input type="tel" placeholder="Teléfono" required-pattern="[0-9]{10}"></input>
          <br/>
          <br/>
          <input type="email" placeholder="E-Mail" required></input>
          <br/>
          <br/>
          <textarea className="formutexto" type="text" placeholder="Comentarios" name="texto" required rows="5" cols="30"></textarea>
          <br/>
          <br/>
          <label>Pagado:</label><br/>
          <label for="si">Si</label>&nbsp;
          <input type="radio" name="pagado" id="si"></input>&nbsp;&nbsp;
          <label for="no">No</label>&nbsp;
          <input type="radio" name="pagado" id="no"></input>&nbsp;
          <br/>
          <br/>
          <button type="submit" value="agendar" className="buttonis">Agendar</button>
          <br/>
          <br/>
        </Container>
      </Form>
    </>
  );
}



export default Agendarc;