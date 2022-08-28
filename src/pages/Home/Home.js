
import styles from './Home.module.css'
import LinkButton from '../../components/Layout/LinkButton'

const Home = () => {
  return (
    <section className={styles.home_container}>
        <h1>Bem Vindo ao <span>Cotações</span></h1>
        <p>Comece a gerenciar as cotações agora mesmo</p>
        <LinkButton to="/novacotacao" text='Nova Cotação' />
    </section>
  )
}

export default Home