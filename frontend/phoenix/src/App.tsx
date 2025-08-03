//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Alumnos from "./pages/Alumnos";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/alumnos" element={<Alumnos></Alumnos>}></Route>
    </Routes>
  );
}

export default App;
