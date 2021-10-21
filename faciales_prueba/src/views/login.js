import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,

} from "reactstrap";


function Login() {

  return (

    <>
      <div>
        <Navbar className="color-nav" variant="light">
          <Link to="/">
            <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px" />
          </Link>
        </Navbar>
      </div>

      <Container align="center">
        <br/>
        <br/>
        <br/>
        <div>
          <h1>Inicio de Sesión</h1>
          <form method="post">
            <br/>
            <input type="text" placeholder="ID" name="id" required></input>
            <br/>
            <br/>
            <input id="password-field" type="password" name="password" placeholder="Contraseña" minlength="8" maxlength="12" required></input>
            <br/>
            <br/>
            <Link to="/ccenter">
              <button className="buttong" type="submit" name="is">Iniciar sesión</button>
            </Link>
          </form>
        </div>

      </Container>


    </>
  );
}



export default Login;