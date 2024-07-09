import React, { useState } from 'react';
import styles from './Home.module.css';

function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { nome, email, mensagem };
    console.log('Formulário a ser enviado:', form);
  };

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Escolha a sua bike</h1>
      </div>
      <div className={styles.bikeContainer}>
        <div className={styles.bike}>
          <img src="/assets/img/magic-home.jpg" alt="Bike 1" />
          <p>Valor: R$2.500,00</p>
        </div>
        <div className={styles.bike}>
          <img src="/assets/img/nebula-home.jpg" alt="Bike 2" />
          <p>Valor: R$3.750,00</p>
        </div>
        <div className={styles.bike}>
          <img src="/assets/img/nimbus-home.jpg" alt="Bike 3" />
          <p>Valor: R$4.850,00</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <br />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className={styles.textarea}
        />
        <br />
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

export default Home;
