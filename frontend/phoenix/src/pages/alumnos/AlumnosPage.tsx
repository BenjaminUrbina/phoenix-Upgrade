import { AlumnosInfo, AlumnoInteractuar } from "../../components/alumnos/index";
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
