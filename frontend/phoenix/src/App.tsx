//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Alumnos from "./pages/Alumnos";
import Notas from "./pages/Notas";
import Inicio from "./components/Alumnos/Inicio";
import Prueba from "./components/Alumnos/Prueba";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/alumnos" element={<Alumnos />}>
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="notas" element={<Notas />} />
        <Route path="prueba" element={<Prueba />} />
      </Route>
    </Routes>
  );
}

export default App;
