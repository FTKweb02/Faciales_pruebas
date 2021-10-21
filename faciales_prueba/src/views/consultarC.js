import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, Link } from  "react-router-dom"
import {
  Navbar,
 
} from "reactstrap";

    function Consultarc() {

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
                <div align="right">
                <button  className="menubutton" onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
                </div>
                <br/>
                <div align="center">
                <h1>Consultar</h1>
                </div>
              </>
            );
          }
        
        

    export default Consultarc;