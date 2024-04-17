// const catalog = [{
//     name: 'Lira Earrings',
//     price: 20,
//     img: './img/shop/Img 01.png',
//     material: 'white gold',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// },
// {
//     name: 'Hal Earrings',
//     price: 20,
//     img: './img/shop/Img 02.png',
//     material: 'gold',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// },
// {
//     name: 'Kaede Hair Pin Set Of 3 ',
//     price: 30,
//     img: './img/shop/Img 03.png',
//     material: 'gold',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// },
// {
//     name: 'Hair Pin Set of 3',
//     price: 30,
//     img: './img/shop/Img 04.png',
//     material: 'white gold',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// },
// {
//     name: 'Plaine Necklace',
//     price: 19,
//     img: './img/shop/Img 05.png',
//     material: 'white gold',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// },
// {
//     name: 'Yuki Hair Pin Set of 3',
//     price: 29,
//     img: './img/shop/Img 06.png',
//     material: 'silver',
//     weight: '0.3kg',
//     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.' 
// }];
// const block = document.querySelector('.page-item__block');
// const viewItem = (element) => {
//     const itemImages = document.createElement('div');
//     itemImages.classList.add('page-item__images');
//     block.append(itemImages);
//     const litImages = document.createElement('div');
//     litImages.classList.add('page-item__little-images');
//     itemImages.append(litImages);
//     const litImage1 = document.createElement('div');
//     litImage.classList.add('page-item__little-image');
//     const img1 = document.createElement('img');
//     img1.src = element.img;
//     litImages.append(litImage1);
//     const litImage2 = document.createElement('div');
//     litImage.classList.add('page-item__little-image');
//     const img2 = document.createElement('img');
//     img2.src = element.img;
//     litImages.append(litImage2);
//     const litImage3 = document.createElement('div');
//     litImage.classList.add('page-item__little-image');
//     const img3 = document.createElement('img');
//     img3.src = element.img;
//     litImages.append(litImage3);
//     const litImage4 = document.createElement('div');
//     litImage.classList.add('page-item__little-image');
//     const img4 = document.createElement('img');
//     img4.src = element.img;
//     litImages.append(litImage4);
//     const itemImage = document.createElement('div');
//     const bigImg = createElement('img');
//     bigImg.src = element.img;
//     itemImage.classList.add('page-item__image');
//     itemImages.append(itemImage);
//     const itemBody = document.createElement('div');
//     itemBody.classList.add('page-item__body');
//     block.append(itemBody);
//     const itemTitle = document.createElement('div');
//     itemTitle.classList.add('page-item__item-title');
//     itemTitle.textContent = element.name;
//     itemBody.append(itemTitle);
//     const itemPrice = document.createElement('div');
//     itemPrice.classList.add('page-item__item-price');
//     itemPrice.textContent = element.price;
//     itemBody.append(itemPrice);
//     const itemDiscription = document.createElement('div');
//     itemDiscription.classList.add('page-item__item-dicription');
//     itemDiscription.textContent = element.discription;
//     itemBody.append(itemDiscription);
//     const itemBtn = document.createElement('button');
//     itemBtn.classList.add('page-item__item-button');
//     itemBody.append(itemBtn);

    
// }
// // document.addEventListener('DOMContentLoaded', () => {
// //     console.log(JSON.parse(localStorage.getItem('item')));
// // })