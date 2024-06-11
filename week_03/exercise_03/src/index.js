function interactWithUser() {
  // Pedir ao usuário que insira seu nome
  const name = prompt('Por favor, insira seu nome:');
  
  // Verificar se o nome foi inserido
  if (!name) {
    alert('Erro: Nome não inserido.');
    return;
  }

  // Perguntar ao usuário se ele deseja continuar
  const confirmContinue = confirm('Você deseja continuar?');
  
  // Exibir mensagem apropriada com base na resposta do usuário
  if (confirmContinue) {
    alert(`Bem-vindo, ${name}! Obrigado por continuar.`);
  } else {
    alert('Interação encerrada.');
  }
}

// Chamar a função para iniciar a interação
interactWithUser();
