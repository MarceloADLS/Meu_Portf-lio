const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Remover a classe 'active' de todas as abas e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Adicionar a classe 'active' à aba clicada
        tab.classList.add('active');
        
        // Obter o ID da aba clicada e exibir o conteúdo correspondente
        const tabId = tab.getAttribute('href').substring(1); // Obtém o ID da aba (sem o '#')
        const tabContent = document.getElementById(tabId); // Seleciona o conteúdo da aba
        tabContent.classList.add('active'); // Exibe o conteúdo da aba
    });
});
