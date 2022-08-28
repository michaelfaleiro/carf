import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import styles from "./CotacaoCard.module.css";

const CotacaoCard = ({ id, carro, chassi, handleRemove }) => {
  return (
    <div className={styles.cotacao_card}>
      <h4>{carro}</h4>
      <p>
        <span>Cotação: </span> {id}
      </p>
      <p>
        <span>Carro: </span>
        {carro}
      </p>
      <p>
        <span>Chassi: </span> {chassi}
      </p>
      <div className={styles.cotacao_card_actions}>
        <Link to={`cotacao/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
};

export default CotacaoCard;
