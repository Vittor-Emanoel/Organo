import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Escola de Programação",
    "Front-End",
    "Devops",
    "UX & Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da Imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
