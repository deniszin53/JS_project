const login = document.querySelector('.account__button_login');
const reg = document.querySelector('.account__button_reg');
const divLogin = document.querySelector('.account__block_login');
const divReg = document.querySelector('.account__block_reg');
let usersArr = JSON.parse(localStorage.getItem('users'));
reg.addEventListener('click', () => {
    divReg.style.display = 'block';
    divLogin.style.display = 'none';
})

login.addEventListener('click', () => {
    divReg.style.display = 'none';
    
    divLogin.style.display = 'block';
})
class User {
    constructor(mail , pass) {
        this.mail = mail,
        this.password = pass
    }
}

const regMail = document.getElementById('acRegMail');
const regPass = document.getElementById('acRegPass');
const regButt = document.getElementById('regButton');
regButt.addEventListener('click', ()=>{
    if (regPass.value && regMail.value) {
        let user = new User(regMail.value , regPass.value);
        usersArr.push(user);
        localStorage.setItem('users', JSON.stringify(usersArr));
    }
    else if (regPass.value) {
        regMail.style.backgroundColor='red';
        setTimeout(()=>{
            regMail.style.backgroundColor='white';
            regMail.style.transition='1.5s';
        }, 600);
    }
    else if (regMail.value) {
        regPass.style.backgroundColor='red';
        setTimeout(()=>{
            regPass.style.backgroundColor='white';
            regPass.style.transition='1.5s';
        }, 600);
    }
    else {
        regMail.style.backgroundColor='red';
        regPass.style.backgroundColor='red';
        setTimeout(()=>{
            regMail.style.transition='1.5s';
            regPass.style.transition='1.5s';
            regMail.style.backgroundColor='white';
            regPass.style.backgroundColor='white';
        }, 600);
    }
})