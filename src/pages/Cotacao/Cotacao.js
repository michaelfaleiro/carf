import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../../components/Layout/Loading";
import Message from "../../components/Layout/Message";
import styles from "./Cotacao.module.css";
import Container from "../../components/Layout/Container";
import LinkButton from "../../components/Layout/LinkButton";
import CotacaoCard from "../../components/cotacao/CotacaoCard";

const Cotacao = () => {
  const location = useLocation();
  const [cotacoes, setCotacoes] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  function removeCotacao(id) {
    axios.delete(`http://localhost:3000/carros/${id}`).then(() => {
      setCotacoes(cotacoes.filter((cotacao) => cotacao.id !== id));
    });
  }

  useEffect(() => {
    axios.get("http://localhost:3000/carros").then((resp) => {
      setCotacoes(resp.data);
      setRemoveLoading(true);
    });
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
              handleRemove={removeCotacao}
            />
          ))}
        {!removeLoading && <Loading />}
      </Container>
    </div>
  );
};

export default Cotacao;
