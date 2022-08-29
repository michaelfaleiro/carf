import { useNavigate } from "react-router-dom";
import CotacaoForm from "../../components/cotacao/CotacaoForm";
import styles from "./NovaCotacao.module.css";

const NovaCotacao = () => {
  const navigate = useNavigate();

  function createPost(cotacao) {
    fetch("http://localhost:3000/carros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cotacao),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/cotacao", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.novacotacao_container}>
      <h1>Criar Cotação</h1>
      <p>Crie sua cotação para depois adicionar as respostas</p>
      <CotacaoForm handleSubmit={createPost} btnText="Criar Cotação" />
    </div>
  );
};

export default NovaCotacao;
