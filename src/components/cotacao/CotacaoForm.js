import { useState } from "react";

import Input from "../form/Input";
import Submit from "../form/Submit";
import styles from "./CotacaoForm.module.css";

const CotacaoForm = ({ handleSubmit, btnText, cotacaoData }) => {
  const [cotacao, setCotacao] = useState(cotacaoData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(cotacao);
  };

  function handleChange(e) {
    setCotacao({ ...cotacao, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Carro"
        name="carro"
        placeholder="Digite o nome do Carro"
        handleOnChange={handleChange}
        value={cotacao.carro ? cotacao.carro : ""}
      />
      <Input
        type="text"
        text="Chassi"
        name="chassi"
        placeholder="Digite o Chassi"
        handleOnChange={handleChange}
        value={cotacao.chassi ? cotacao.chassi : ""}
      />
      <Submit text={btnText} />
    </form>
  );
};

export default CotacaoForm;
