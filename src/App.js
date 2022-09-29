import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborarAdicionado = (colaborador) => {
    console.log(colaborador);
  };

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaborarAdicionado} />
      <Time />
    </>
  );
}

export default App;
