// Navegação entre abas
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remover a classe 'active' de todas as abas e seções
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adicionar a classe 'active' à aba clicada e à seção correspondente
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Ativar a primeira aba por padrão
tabs[0].classList.add('active');
tabContents[0].classList.add('active');
