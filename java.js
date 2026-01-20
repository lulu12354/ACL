const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.menu');
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('ativo');
    });
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('ativo');
        });
    });