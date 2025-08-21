import Container from "react-bootstrap/Container";
import alumnosIMG from "../../assets/imgIncog.jpg";
import { Image } from "react-bootstrap";
import "../../styles/components/alumnosInfo.css";
import { Link } from "react-router-dom";

function AlumnosInfo() {
  return (
    <div className="contenerdor-info-alumno rounded">
      <Container className="info-alumnos justify-content-center">
        <Image src={alumnosIMG} alt="AlumnoImagen" className="imgAlumn" fluid />
        <p className="text-sm">Informacion Alumno</p>
        <p className="text-sm">Carrera</p>
        <p className="text-sm">Año</p>
        <p className="text-sm">Ingreso</p>
        <Link to="/alumnos/inicio" className="">
          Ir a inicio
        </Link>
        <Link to="" className="">
          Servicio de Salud
        </Link>
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
