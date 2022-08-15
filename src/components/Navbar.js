import { NavLink } from "react-router-dom";

import logo from "../img/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <img src={logo} alt="Carfy"></img>
      <h3>Carfy Cotações</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
