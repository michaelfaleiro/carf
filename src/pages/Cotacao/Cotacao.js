import { useLocation } from "react-router-dom";
import Message from "../../components/Layout/Message";
import styles from "./Cotacao.module.css";
import Container from "../../components/Layout/Container";
import LinkButton from "../../components/Layout/LinkButton";
import CotacaoCard from "../../components/cotacao/CotacaoCard";
import { useState, useEffect } from "react";

const Cotacao = () => {
  const location = useLocation();
  const [cotacoes, setCotacoes] = useState([]);

  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/cotacao", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCotacoes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.cotacao_container}>
      <div className={styles.title_container}>
        <h1>Minhas Cotações</h1>
        <LinkButton to="/novacotacao" text="Nova Cotação" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {cotacoes.length > 0 &&
          cotacoes.map((cotacoes) => (
            <CotacaoCard
              id={cotacoes.id}
              carro={cotacoes.carro}
              chassi={cotacoes.chassi}
              key={cotacoes.id}
            />
          ))}
      </Container>
    </div>
  );
};

export default Cotacao;
