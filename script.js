const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        const tabId = tab.getAttribute('href').substring(1); // Obtém o ID da aba
        document.getElementById(tabId
