import React, { useState } from 'react';
import Header from './components/Header'; 

function App() {
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [mensagem, setMensagem] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { nome, email, mensagem };
    console.log('Formulário a ser enviado:', form);
    
  };

  return (
    <div className="App">
      <Header /> 
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
