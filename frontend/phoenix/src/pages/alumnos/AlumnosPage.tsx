import { AlumnosInfo, AlumnoInteractuar } from "../../components";
import "../../styles/pages/alumnos.css";

function AlumnosPage() {
  return (
    <div className="contenedor-alumnos">
      <AlumnosInfo />
      <AlumnoInteractuar />
    </div>
  );
}

export default AlumnosPage;
