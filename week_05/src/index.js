// script.js
document.addEventListener('DOMContentLoaded', () => {
    const interestInput = document.getElementById('interestInput');
    const addButton = document.getElementById('addButton');
    const interestList = document.getElementById('interestList');
    const titleNewsToday = document.querySelector('.title-news-today');

    // Recupera os interesses do localStorage
    const interests = JSON.parse(localStorage.getItem('meus-interesses')) || [];

    // Exibe os interesses na lista
    function displayInterests() {
        interestList.innerHTML = '';
        interests.forEach(interest => {
            const li = document.createElement('li');
            li.textContent = interest;
            interestList.appendChild(li);
        });
    }

    // Adiciona um novo interesse
    addButton.addEventListener('click', () => {
        const newInterest = interestInput.value.trim();
        if (newInterest) {
            interests.push(newInterest);
            localStorage.setItem('meus-interesses', JSON.stringify(interests));
            interestInput.value = '';
            displayInterests();
        }
    });

    // Atualiza a lista a cada 1 segundo (bônus)
    setInterval(displayInterests, 1000);

    // Recupera a primeira notícia do dia da API do IBGE
    fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        .then(response => response.json())
        .then(data => {
            const firstNewsTitle = data.items[0].titulo;
            titleNewsToday.textContent = `Notícia do dia: ${firstNewsTitle}`;
        })
        .catch(error => console.error('Erro ao recuperar notícias:', error));

    // Exibe os interesses iniciais
    displayInterests();
});
