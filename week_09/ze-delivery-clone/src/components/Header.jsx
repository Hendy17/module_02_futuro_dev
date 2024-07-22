import { Link } from 'react-router-dom';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Ze Delivery</h1>
      <nav>
        <Link to="/signin">Entrar</Link>
      </nav>
    </header>
  );
};

export default Header;
