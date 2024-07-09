// Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Importando o arquivo CSS

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        Loja de Bicicletas
      </div>
      <div className={styles.right}>
        Bicicletas | Seguros | Contatos
      </div>
    </header>
  );
}

export default Header;
