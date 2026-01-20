const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.menu');

    // Abre/Fecha o menu ao clicar no hamburguer
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('ativo');
    });

    // Fecha o menu automaticamente ao clicar em um link (para rolar até a sessão)
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('ativo');
        });
    });