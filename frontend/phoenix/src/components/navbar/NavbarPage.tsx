import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/components/navbar.css";
import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown
              title="Información del Estudiante"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown
              title="Datos Académimcos"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/prueba">Prueba</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Datos Financieros"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/prueba">Prueba</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Asignaturas"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/notas">
                Notas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Beneficios"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/prueba">Prueba</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Solicitudes"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/prueba">Prueba</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Oficina de Egresados"
              id="basic-nav-dropdown"
              className="item-nav-link"
            >
              <NavDropdown.Item as={Link} to="/alumnos/prueba">Prueba</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="item-nav-link">Instructivos</Nav.Link>
            <Nav.Link className="item-nav-link">
              Mis encuentas/Cuestionarios
            </Nav.Link>
            <Nav.Link className="item-nav-link">Concursos DIDULS</Nav.Link>
            <Nav.Link className="item-nav-link">Identidad Visual</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
