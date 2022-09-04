import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../components/Layout/Container";

import styles from "./EditaCotacao.module.css";
import Loading from "../../components/Layout/Loading";

import CotacaoForm from "../../components/cotacao/CotacaoForm";

export const EditaCotacao = () => {
  const { id } = useParams();
  const [cotacao, setCotacao] = useState([]);
  const [showCotacaoForm, setShowCotacaoForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/carros/${id}`).then((res) => {
      setCotacao(res.data);
    });
  }, [id]);

  function buscarDados() {
    axios.get(`http://localhost:3000/carros/${id}`).then((res) => {
      setCotacao(res.data);
    });
  }

  function toggleCotacaoForm() {
    setShowCotacaoForm(!showCotacaoForm);
  }

  const editPost = (cotacao) =>
    axios
      .put(`http://localhost:3000/carros/${cotacao.id}`, cotacao)
      .then(() => {
        console.log("Deu certo");
        buscarDados();
        setShowCotacaoForm(false);
        //navigate(`/cotacao/${id}`);
      });

  return (
    <>
      {cotacao.carro ? (
        <div className={styles.cotacao_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Cotação : {cotacao.carro}</h1>
              <button className={styles.btn} onClick={toggleCotacaoForm}>
                {!showCotacaoForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showCotacaoForm ? (
                <div className={styles.cotacao_info}>
                  <p>
                    <span>Categoria</span>
                  </p>
                  <p>
                    <span>Total da Cotação</span>
                  </p>
                  <p>
                    <span>Total da Cotação</span>
                  </p>
                </div>
              ) : (
                <div className={styles.cotacao_info}>
                  <CotacaoForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    cotacaoData={cotacao}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
