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

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
        />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da Imagem" />

        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;

//SE QUISER PASSAR MAIS DE UMA PROP DENTRO DE UM COMPONENTE, PASSE O CHILDREN - LINHA 24
