import Container from "react-bootstrap/Container";
import alumnosIMG from "../../assets/imgIncog.jpg";
import { Image } from "react-bootstrap";
import "./alumnosInfo.css";
function AlumnosInfo() {
  return (
    <div className="contenerdor-info-alumno">
      <Container className="infor-alumnos">
        <Image src={alumnosIMG} alt="AlumnoImagen" className="imgAlumno" />
        <p>Informacion Alumno</p>
        <p>Carrera</p>
        <p>Año</p>
        <p>Ingreso</p>
      </Container>

      <Container className="hub-alumnos-ayuda">
        <p>Certificado Alumno Regular</p>
        <p>Cambiar Contraseña</p>
        <p>Soporte</p>
        <p>Cerrar Sesión</p>
      </Container>
    </div>
  );
}

export default AlumnosInfo;
