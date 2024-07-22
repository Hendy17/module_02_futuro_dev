
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>Encontre a sua bebida favorita</h2>
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Hero;
