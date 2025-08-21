//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Usando barrel exports para importaciones más limpias
import { Alumnos, Inicio } from "./pages/alumnos/index";
import Home from "./pages/Home";
import { PruebaComponent } from "./components";
import { Notas } from "./components/index";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/alumnos" element={<Alumnos />}>
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="notas" element={<Notas />} />
        <Route path="prueba" element={<PruebaComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
