import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import caduceo from "../../assets/imgs/caduceo.png"

import './style.css';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <div> 

    <Navbar collapseOnSelect  expand="lg"   className='bg-primary'   
      > 

      <Container  className='bg-primary'  >

        {/* <Nav.Link href="#home">   */}
                    <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}> 
                    <div className='logo'>  
  <img src= {caduceo} alt=""   />  <h2>Docappoint</h2> </div>  </Link> 
  {/* </Nav.Link> */}  
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav"   />  
        <Navbar.Collapse id="responsive-navbar-nav"   >
 
          <Nav className="me-auto container  bg-primary" > 
            <Nav.Link href="#features" >  
              <Link to={`/consulta`} style={{ textDecoration: "none", color: "inherit" }}> 
              Consulta Rapida</Link>
              </Nav.Link>

             <NavDropdown title="Especialistas" id="collasible-nav-dropdown">
              <NavDropdown.Item href=" ">
              <Link to={`/especialidades/`} style={{ textDecoration: "none", color: "inherit" }}> 
              Odontologos
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to={`/especialidades/cardiologos`} style={{ textDecoration: "none", color: "inherit" }}> 
              Cardiologos
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link to={`/especialidades/infectologos`} style={{ textDecoration: "none", color: "inherit" }}> 
              Infectologos
              </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
              <Link to={`/especialidades/etorrinolaringolos`} style={{ textDecoration: "none", color: "inherit" }}> 
              Otorrinolaringolos
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <Link to={`/especialidades/endocrinologos`} style={{ textDecoration: "none", color: "inherit" }}> 
              Endocrinologos
              </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features" > 
            <Link to={`/registrarse`} style={{ textDecoration: "none", color: "inherit" }}> 
              Registrarse
              </Link>
              </Nav.Link>

              <Nav.Link href="#features" > 

              <Link to={`/iniciosesion`} style={{ textDecoration: "none", color: "inherit" }}> 
              Inicio Sesion
              </Link>  </Nav.Link>

            {/* <NavDropdown title="Registrarse" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <Link to={`/registrarse`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Paciente
              </Link>
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.2">
              <Link to={`/registrarse`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Especialista
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to={`/registrarse`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Laboratorio
              </Link>
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}

            {/* <NavDropdown title="Inicio Sesion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <Link to={`/iniciosesion`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Paciente
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to={`/iniciosesion`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Especialista
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to={`/iniciosesion`} style={{ textDecoration: "none", color: "inherit" }}> 
              Como Laboratorio
              </Link>
              </NavDropdown.Item>
            </NavDropdown> */}

            </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </div> 
  );
}

export default CollapsibleExample;