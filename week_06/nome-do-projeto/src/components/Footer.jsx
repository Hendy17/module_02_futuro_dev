import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Loja de Bicicletas</h2>
          <p>Endereço: Rua das Bicicletas, 123</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@lojadebicicletas.com</p>
        </div>
        <div className={styles.social}>
          <p>Siga-nos:</p>
          <a href="https://facebook.com" className={styles.link}>Facebook</a>
          <a href="https://twitter.com" className={styles.link}>Twitter</a>
          <a href="https://instagram.com" className={styles.link}>Instagram</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Loja de Bicicletas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
