import Container from "react-bootstrap/Container";
import alumnosIMG from "../../assets/imgIncog.jpg";
import { Image } from "react-bootstrap";
import "./alumnosInfo.css";
import { Link } from "react-router-dom";

function AlumnosInfo() {
  return (
    <div className="contenerdor-info-alumno">
      <Container className="info-alumnos">
        <Image src={alumnosIMG} alt="AlumnoImagen" className="imgAlumn" fluid />
        <p>Informacion Alumno</p>
        <p>Carrera</p>
        <p>Año</p>
        <p>Ingreso</p>
        <Link to="/alumnos/inicio" className="btn btn-primary">Ir a inicio</Link>
      </Container>

      <Container className="hub-alumnos-ayuda">
        <p>Certificado Alumno Regular</p>
        <p>Cambiar Contraseña</p>
        <p>Soporte</p>
        <p>Editar Perfil</p>
        <p>Cerrar Sesión</p>
      </Container>
    </div>
  );
}

export default AlumnosInfo;
