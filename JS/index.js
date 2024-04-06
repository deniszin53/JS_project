const btnTop = document.querySelector('.btn__top');
btnTop.addEventListener('click', () => {
    window.scroll({
        top:0,
        left: 0,
        behavior:'smooth'
    });
})