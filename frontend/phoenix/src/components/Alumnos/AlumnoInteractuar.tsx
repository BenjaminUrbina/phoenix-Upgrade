import "../../styles/components/alumnosinteractuar.css";
import Navbar from "../navbar/NavbarPage";
import { Outlet } from "react-router-dom";

function AlumnoInteractuar() {
  return (
    <div className="contenedor-AlumnoInteractuar rounded">
      <Navbar />
      <div className="contenedor-vista">
        <Outlet />
      </div>
    </div>
  );
}

export default AlumnoInteractuar;
