const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const modals = document.querySelectorAll('.modal-backdrop');

function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
}
function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    if (![...modals].some(m => m.classList.contains('is-open'))) {
    document.body.classList.remove('no-scroll');
    }
}
function openModal(id) {
    closeMenu();
    const modal = document.getElementById(id);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    // const firstInput = modal.querySelector('input');
    // if (firstInput) setTimeout(() => firstInput.focus(), 100);
}
function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

burger.addEventListener('click', () =>
    burger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu()
);
menuClose.addEventListener('click', closeMenu);
menu.addEventListener('click', e => { if (e.target === menu) closeMenu(); });

document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => openModal(button.dataset.modal));
});
modals.forEach(modal => {
    modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal); });
    modal.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    modal.querySelector('.success-message').classList.add('show');
    e.target.reset();
    });
});
document.querySelectorAll('.menu-nav a').forEach(link => {
    link.addEventListener('click', () => {
    document.querySelectorAll('.menu-nav a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    closeMenu();
    });
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
    closeMenu();
    modals.forEach(closeModal);
    }
});