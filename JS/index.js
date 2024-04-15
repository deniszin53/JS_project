const catalog = [{
    name: 'Lira Earrings',
    price: 20,
    img: '../img/shop/Img 01.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Hal Earrings',
    price: 20,
    img: '../img/shop/Img 02.png',
    material: 'gold',
    weight: '0.3kg',
},
{
    name: 'Kaede Hair Pin Set Of 3 ',
    price: 30,
    img: '../img/shop/Img 03.png',
    material: 'gold',
    weight: '0.3kg',
},
{
    name: 'Hair Pin Set of 3',
    price: 30,
    img: '../img/shop/Img 04.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Plaine Necklace',
    price: 19,
    img: '../img/shop/Img 05.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Yuki Hair Pin Set of 3',
    price: 29,
    img: '../img/shop/Img 06.png',
    material: 'silver',
    weight: '0.3kg',
}];
const btnTop = document.querySelector('.btn__top');
btnTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
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
});

const carts = document.querySelectorAll('.item_cart');
let corzArray = [];
for(let cart of carts){
cart.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(cart.parentElement.previousElementSibling.previousElementSibling.textContent);
    catalog.forEach((element) => {
        if(cart.parentElement.previousElementSibling.previousElementSibling.textContent===element.name){
            corzArray.push({element});
            console.log(element);
            let JSONcorzArray = JSON.stringify(corzArray);
            localStorage.setItem('corz',JSONcorzArray);
        }
    })
});
};
console.log(corzArray);


