import styles from "./CotacaoForm.module.css";
import Input from "./Input";

const CotacaoForm = () => {
  return (
    <form className={styles.form}>
      <Input type="text"
      text="SKU"
      name="sku"
      placeholder="Digite o SKU"
    />
    </form>
  );
};

export default CotacaoForm;
