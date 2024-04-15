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
    linkCart.classList.add('item__link');
    const imgCart = document.createElement('img');
    imgCart.src = '../icons/shop/corz.svg';
    imgCart.alt = '';
    linkCart.appendChild(imgCart);
    const linkEye = document.createElement('a');
    linkEye.href = '';
    linkEye.classList.add('item__link');
    const imgEye = document.createElement('img');
    imgEye.src = '../icons/shop/eye-svgrepo-com 1.svg';
    imgEye.alt = '';
    linkEye.appendChild(imgEye);
    const linkHeart = document.createElement('a');
    linkHeart.href = '';
    linkHeart.classList.add('item__link');
    const imgHeart = document.createElement('img');
    imgHeart.src = '../icons/shop/heart-svgrepo-com 1.svg';
    imgHeart.alt = '';
    linkHeart.appendChild(imgHeart);
    links.appendChild(linkCart);
    links.appendChild(linkEye);
    links.appendChild(linkHeart);
    actualСatolog.appendChild(item);
}
const actualСatolog = document.getElementById("catalog");
const filter = document.getElementById('filter_select');
const searchBut = document.getElementById('searchButton');
const searchInp = document.getElementById('searchInput');
let catalogArray = [];
const onFilterChange = () => {
    catalogArray.splice(0);
    actualСatolog.innerHTML = '';
    const filterValue = filter.value;
    catalog.forEach((element) => {
        if (filterValue === 'View all' || element.material.toLowerCase() === filterValue.toLowerCase()) {
            catalogArray.push(element);
            catalogArray.forEach((element)=>{
                onSearch();
            })
            
        }
    });
    
};

filter.addEventListener('change', onFilterChange);
const onSearch = () => {
    actualСatolog.innerHTML = '';
    const searchValue = searchInp.value.toLowerCase().trim();
    catalogArray.forEach((element) => {
        
        if (element.name.toLowerCase().trim().includes(searchValue) || searchValue === ''){
            viewItems(element);
        }
    })
}

searchBut.addEventListener('click',onSearch);
searchInp.addEventListener('keyup',onSearch);


onFilterChange();



