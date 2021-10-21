import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Row,
  Col,
 
} from "reactstrap";


    function Consultarf() {

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
                <Container>
                  <Row>
                    <Col>
                      <h1>Consultar Folio</h1>
                      <br/>
                      <input type="search" placeholder="Folio: "></input>
                      <br/>
                      <br/>
                <div>
                  <button className="buttonis" type="submit">Consultar</button>
                </div>
                    </Col>
                    <Col>
                      <h6>Nombre: </h6>
                      <h6>Teléfono: </h6>
                      <h6>Folio: </h6>
                      <h6>Tratamientos Totales: </h6>
                      <h6>Tratamientos Restantes: </h6>
                      <h6>Acompañantes: </h6>
                      <h6>Acompañantes Restantes: </h6>
                    </Col>
                  </Row>
                
                <br/>
                <div align="center">
                <table width="100%" className="magia">
                  <thead>
                    <tr>
                     <th>Tratamiento</th>
                     <th>Agendar</th>
                     <th>Asesor</th>
                     <th>Citas</th>
                   </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nombre Tratamiento</td>
                      <td><button type="submit" className="buttonis">Agendar</button></td>
                      <td></td>
                     <td></td>
                   </tr>
                  </tbody>
                </table>
                </div>
                </Container>
              </>
            );
          }
        
        

    export default Consultarf;