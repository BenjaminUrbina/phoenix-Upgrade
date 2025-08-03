import AlumnosInfo from "../components/Alumnos/AlumnosInfo";
import AlumnoInteractuar from "../components/Alumnos/AlumnoInteractuar";
import "./cssPages/alumnos.css";

function Alumnos() {
  return (
    <div className="contenedor-alumnos">
      <AlumnosInfo />
      <AlumnoInteractuar />
    </div>
  );
}

export default Alumnos;
