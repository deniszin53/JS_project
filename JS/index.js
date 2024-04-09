const btnTop = document.querySelector('.btn__top');
btnTop.addEventListener('click', () => {
    window.scroll({
        top:0,
        left: 0,
        behavior:'smooth'
    });
})

const btnBurger = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header__list_mobile');
const x = document.querySelector('.x');
btnBurger.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
    x.style.display = 'block';
})
x.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    x.style.display = 'none';
})
