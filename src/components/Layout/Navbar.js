import { NavLink } from "react-router-dom";

import logo from "../../img/logo.png";
import Container from "./Container";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <Container>
      <img src={logo} alt="Carfy"></img>
      <h3>Carfy Cotações</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/cotacao'>Cotações</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      </Container>
    </navbar>
  );
};

export default Navbar;
