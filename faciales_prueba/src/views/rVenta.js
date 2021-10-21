import React from "react";
import './App.css';
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Row,
  Col,
  Container

} from "reactstrap";

function Rventa() {

  $('.AddNew').click(function(){
    var row = $(this).closest('Row').clone();
    row.find('input').val('');
    $(this).closest('Row').after(row);
    $('input[type="button"]', row).removeClass('AddNew')
                                  .addClass('RemoveRow').val('Remove item');
 });
 
 $('table').on('click', '.RemoveRow', function(){
   $(this).closest('Row').remove();
 });

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
      <Form method="post">
        <h1 align="center">Registrar Membresía</h1>
          <br/>
          <table align="center">
            <tbody>
              <tr>
                <td>
                  <input size="30" type="search" id="idcliente" placeholder="ID Cliente"></input></td>
              </tr>
              <tr>

                <td><br/>
                <input size="30" type="text" id="folio_membresia" placeholder="Folio Membresía"></input></td>
              </tr>
              <br/>
              <tr>
                <td><label for="idasesor"><b>ID Asesor: </b></label><br/>
                  <input size="30" type="text" id="idasesor"></input></td>
              </tr>
              <br/>
              <tr>
                <td><label for="fechacompra"><b>Fecha Compra: </b></label><br/>
                  <input type="date" id="fechacompra"></input></td>
              </tr>
              <br/>
              <Container className="table_border">
              <Row>
                <Col>
                  <label for="cat">Categoría</label><br/><input type="text" id="cat"></input>
                </Col>
                <Col>
                  <label for="cant">Cantidad</label><br/><input type="text" id="cant"></input>
                </Col>
                <Col>
                  <label for="notas">Notas</label><br/><input type="textarea" id="notas"></input>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col><img type="button" className="AddNew logos" src="/icon_plus.jpg" alt="plus"></img></Col>
              </Row>
              </Container>
                <br/>
              <tr>
                <td><label for="acompañante"><b># Acompañantes</b></label><br/>
                  <input size="30" type="text" id="acompañante"></input></td>
              </tr>
                <br/>
              <tr>
                <td><label for="ticketnova"><b># Ticket: </b></label><br/>
                  <input size="30" type="text" id="ticketnova"></input></td>
              </tr>
              <br/>
              <tr>
                <td><label for="importep"><b>Importe Total (Ticket): </b></label><br/>
                  <input size="30" type="text" id="importep"></input></td>
              </tr>
              <br/>
              <tr>
                <td><label for="descuento"><b>Descuento: </b></label></td>
                <br/>
              </tr>
              <h5>'Generado automáticamente con base al Importe Total'</h5>
              <br/>
              <tr>
                <td><label for="observaciones"><b>Observaciones: </b></label><br/>
                  <input size="30" type="text" id="observaciones"></input></td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div align="center">
            <button className="buttong" type="submit" name="registrar">Registrar</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="buttong" type="submit" name="registraryag">Registrar y Agendar</button>
          </div>
          <br/>
        
      </Form>
    </>
  );
}

export default Rventa;