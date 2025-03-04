// Seleciona todas as abas e o conteúdo das abas
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Função para mudar a aba ativa
function changeTab(event) {
    // Remover a classe "active" de todas as abas
    tabs.forEach(tab => tab.classList.remove('active'));

    // Adicionar a classe "active" à aba clicada
    event.target.classList.add('active');

    // Ocultar todos os conteúdos das abas
    tabContents.forEach(content => content.classList.remove('active'));

    // Mostrar o conteúdo da aba correspondente
    const targetContent = document.querySelector(event.target.getAttribute('href'));
    targetContent.classList.add('active');
}

// Adiciona o evento de clique para todas as abas
tabs.forEach(tab => {
    tab.addEventListener('click', changeTab);
});
