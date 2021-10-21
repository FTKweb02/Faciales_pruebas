import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {
  Container,
  Navbar,
 
} from "reactstrap";

    function Facialista() {

  
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
        
                <Container align="center">
                <br/>
                  <div>
                    <h1>Seleccionar Sucursal</h1>
                    <br/>
                  </div>
                  <label><b>Sucursal: </b></label>
                  <br/>
                  <select>
                    <option selected="" value=""></option>
                    <option value="cabina1">Sucursal 1</option>
                    <option value="cabina2">Sucursal 2</option>
                    <option value="cabina3">Sucursal 3</option>
                    <option value="cabina4">Sucursal 4</option>
                    <option value="cabina5">Sucursal 5</option>
                    <option value="cabina6">Sucursal 6</option>
                  </select>
                  <br/>
                  <br/>
                  <Link to="/citfac">
                  <button className="buttong" type="submit">Seleccionar</button>
                  </Link>
                </Container>
        
        
              </>
            );
          }
        
        

    export default Facialista;