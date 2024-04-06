const login = document.querySelector('.account__button_login');
const reg = document.querySelector('.account__button_reg');
const divLogin = document.querySelector('.account__block_login');
const divReg = document.querySelector('.account__block_reg');

reg.addEventListener('click', () => {
    divReg.style.display = 'block';
    divLogin.style.display = 'none';
})

login.addEventListener('click', () => {
    divReg.style.display = 'none';
    
    divLogin.style.display = 'block';
})