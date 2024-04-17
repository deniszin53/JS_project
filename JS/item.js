
const block = document.querySelector('.page-item__block');
const viewItem = (element) => {
    const itemImages = document.createElement('div');
    itemImages.classList.add('page-item__images');
    block.prepend(itemImages);
    const litImages = document.createElement('div');
    litImages.classList.add('page-item__little-images');
    itemImages.append(litImages);
    const litImage1 = document.createElement('div');
    litImage1.classList.add('page-item__little-image');
    const img1 = document.createElement('img');
    litImage1.append(img1);
    litImages.append(litImage1);
    const litImage2 = document.createElement('div');
    litImage2.classList.add('page-item__little-image');
    const img2 = document.createElement('img');
    litImage2.append(img2);
    litImages.append(litImage2);
    const litImage3 = document.createElement('div');
    litImage3.classList.add('page-item__little-image');
    const img3 = document.createElement('img');
    litImage3.append(img3);
    litImages.append(litImage3);
    const litImage4 = document.createElement('div');
    litImage4.classList.add('page-item__little-image');
    const img4 = document.createElement('img');
    litImage4.append(img4);
    litImages.append(litImage4);
    const itemImage = document.createElement('div');
    const bigImg = document.createElement('img');
    itemImage.append(bigImg);
    img1.src = element.img;
    img1.onerror = () =>{
        img1.src = '.' + element.img;
    }
    img2.src = element.img;
    img2.onerror = () =>{
        img2.src = '.' + element.img;
    }
    img3.src = element.img;
    img3.onerror = () =>{
        img3.src = '.' + element.img;
    }
    img4.src = element.img;
    img4.onerror = () =>{
        img4.src = '.' + element.img;
    }
    bigImg.src = element.img;
    bigImg.onerror = () =>{
        bigImg.src = '.' + element.img;
    }
    itemImage.classList.add('page-item__image');
    itemImages.append(itemImage);
    const itemBody = document.createElement('div');
    itemBody.classList.add('page-item__body');
    block.append(itemBody);
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('page-item__item-title');
    itemTitle.textContent = element.name;
    itemBody.append(itemTitle);
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('page-item__item-price');
    itemPrice.textContent = element.price + ' $';
    itemBody.append(itemPrice);
    const itemDiscription = document.createElement('div');
    itemDiscription.classList.add('page-item__item-dicription');
    itemDiscription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.';
    itemBody.append(itemDiscription);
    const itemBtn = document.createElement('button');
    itemBtn.classList.add('page-item__item-button');
    itemBtn.textContent = 'ADD TO CART';
    itemBody.append(itemBtn);
    itemBtn.addEventListener('click', (event) => {

        let array = JSON.parse(localStorage.getItem('corz'));
        console.log(array);
        console.log(element);
        array.push({ element });
        let JSONcorz = JSON.stringify(array);
        localStorage.setItem('corz', JSONcorz);
    })
}
document.addEventListener('DOMContentLoaded', () => {
    viewItem(JSON.parse(localStorage.getItem('item')));

})