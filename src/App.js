import "./App.css";
import Banner from "./componentes/Banner/index.js";
import CampoTexto from "./componentes/CampoTexto/index.js";

function App() {
  return (
    <>
      <Banner />;
      <CampoTexto label="Nome" placeholder="Digite seu nome" />;
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />;
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />;
    </>
  );
}

export default App;
