import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col
 
} from "reactstrap";

    function Historial() {

      const history = useHistory();

            return (
        
              <>
                <div>
                  <Navbar className="color-nav" variant="light">
                    <Link to="/">  
                        <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px"/>
                    </Link>
                    <Link to="/">
                      <button className="buttonis">Cerrar Sesión</button>
                    </Link>
                  </Navbar>  
                </div> 
                <br/>
                <div align="right" >
                <button className="menubutton" onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
                </div>
                <br/>
                <Container fluid>
                  <Row>
                    <Col><h2>Historial de ventas de: <b>'Vendedor'</b></h2></Col>
                    <Col><h2>1er Lugar Servicios Vendidos: <b>'Vendedor'</b></h2></Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col><h4 className="texts"># Servicios: <u>'Cantidad'.</u></h4>
                  <br/>
                  <h4 className="texts">Monto Servicios: <u>'$ Cantidad'.</u></h4>
                  <br/>
                  <h4 className="texts">Venta total: <u>'$ Cantidad'.</u></h4>
                  <br/>
                  <h4 className="texts">Mis citas totales (mes): <u>'Cantidad'.</u></h4>
                  <br/></Col>
                  <Col><h2>1er Lugar Monto Vendido: <b><u>'$100000.00'</u></b></h2></Col>
                  </Row>
                </Container>
              </>
            );
          }
        
        

    export default Historial;