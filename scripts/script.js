window.addEventListener('load', init);

function init() {
    const $toggle = document.getElementById('nav-toggle');
    $toggle.addEventListener('click', toggleNav);
}

function toggleNav(e) {
    e.target.parentElement.classList.toggle('nav--open');
}