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
