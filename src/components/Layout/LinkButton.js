import { NavLink } from "react-router-dom"
import styles from './LinkButton.module.css'

const LinkButton = ({to, text}) => {
  return (
    <NavLink className={styles.btn} to={to}>
        {text}
    </NavLink>
  )
}

export default LinkButton