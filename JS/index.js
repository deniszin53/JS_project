const catalog = [{
    name: 'Lira Earrings',
    price: 20,
    img: './img/shop/Img 01.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Hal Earrings',
    price: 20,
    img: './img/shop/Img 02.png',
    material: 'gold',
    weight: '0.3kg',
},
{
    name: 'Kaede Hair Pin Set Of 3 ',
    price: 30,
    img: './img/shop/Img 03.png',
    material: 'gold',
    weight: '0.3kg',
},
{
    name: 'Hair Pin Set of 3',
    price: 30,
    img: './img/shop/Img 04.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Plaine Necklace',
    price: 19,
    img: './img/shop/Img 05.png',
    material: 'white gold',
    weight: '0.3kg',
},
{
    name: 'Yuki Hair Pin Set of 3',
    price: 29,
    img: './img/shop/Img 06.png',
    material: 'silver',
    weight: '0.3kg',
}];
const viewItems = (element) => {
    const item = document.createElement('div');
    item.classList.add('shop__item', 'item');
    const itemPhoto = document.createElement('div');
    item.appendChild(itemPhoto);
    itemPhoto.classList.add('item__photo');
    const img = document.createElement('img');
    img.src = element.img;
    itemPhoto.appendChild(img);
    const itemTitle = document.createElement('div');
    item.appendChild(itemTitle);
    itemTitle.classList.add('item__title');
    itemTitle.innerHTML = element.name;
    const price = document.createElement('div');
    item.appendChild(price);
    price.classList.add('item__price');
    price.innerHTML = '$' + element.price;
    const links = document.createElement('div');
    item.appendChild(links);
    links.classList.add('item__links');
    links.classList.add('item__links_shop');
    const linkCart = document.createElement('a');
    linkCart.href = '';
    linkCart.classList.add('item__link','item_cart' );
    const imgCart = document.createElement('img');
    imgCart.src = './icons/shop/corz.svg';
    imgCart.alt = '';
    linkCart.addEventListener('click', (event) => {
        event.preventDefault();
        catalog.forEach((element) => {
            if(linkCart.parentElement.previousElementSibling.previousElementSibling.textContent===element.name){
                corzArray.push({element});
                console.log(element);
                let JSONcorzArray = JSON.stringify(corzArray);
                localStorage.setItem('corz',JSONcorzArray);
            }
        })
    });
    linkCart.appendChild(imgCart);
    const linkEye = document.createElement('a');
    linkEye.href = './pages/item.html';
    linkEye.classList.add('item__link');
    const imgEye = document.createElement('img');
    imgEye.src = './icons/shop/eye-svgrepo-com 1.svg';
    imgEye.alt = '';
    linkEye.appendChild(imgEye);
    linkEye.addEventListener('click', (event) => {
        if(linkEye.parentElement.previousElementSibling.previousElementSibling.textContent===element.name){
            let JSONitem = JSON.stringify(element);
            localStorage.setItem('item', JSONitem);
        }
    });
    const linkHeart = document.createElement('a');
    linkHeart.href = '';
    linkHeart.classList.add('item__link');
    const imgHeart = document.createElement('img');
    imgHeart.src = './icons/shop/heart-svgrepo-com 1.svg';
    imgHeart.alt = '';
    linkHeart.appendChild(imgHeart);
    links.appendChild(linkCart);
    links.appendChild(linkEye);
    links.appendChild(linkHeart);
    shopBlock.appendChild(item);
}
const btnTop = document.querySelector('.btn__top');
btnTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
const shopBlock = document.getElementById('shop');
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
let itemArray = [];
// for(let cart of carts){
// cart.addEventListener('click', (event) => {
//     event.preventDefault();
//     catalog.forEach((element) => {
//         if(cart.parentElement.previousElementSibling.previousElementSibling.textContent===element.name){
//             corzArray.push({element});
//             console.log(element);
//             let JSONcorzArray = JSON.stringify(corzArray);
//             localStorage.setItem('corz',JSONcorzArray);
//         }
//     })
// });
// };
catalog.forEach((element)=>{
    viewItems(element);
})


