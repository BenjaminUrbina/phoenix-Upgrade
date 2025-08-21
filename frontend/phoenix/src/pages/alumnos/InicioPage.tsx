import Contenedor from "react-bootstrap/Container";
import "../../styles/pages/inicio-alumno.css";
import NewNoticiasCard from "../../components/Noticias/NewNoticiasCard";

type Props = {};

function InicioPage({}: Props) {
  return (
    <div className="inicio-container">
      <h1>Bienvenido a la plataforma de la Universidad de la Serena</h1>
      <p>
        Esta plataforma es un proyecto de prueba para la materia de Programación
        Web.
      </p>
      <Contenedor className="container-newNotices">
        <h2>Ultimas Noticias</h2>
        {/*La idea en este apartado es poder llamar a la base de datos y 
        actualizar de manera iterativa las noticias */}
        <NewNoticiasCard />
      </Contenedor>
    </div>
  );
}

export default InicioPage;
