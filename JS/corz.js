
const actualCorzStr = localStorage.getItem('corz');
if (actualCorzStr) {
    const actualCorz = JSON.parse(actualCorzStr);
    actualCorz.forEach((cartItem, index) => {
        let cartBody = document.querySelector('.cart__body');
        const element = cartItem.element; 
        const itemElem = document.createElement('div');
        itemElem.classList.add('cart__item');
        const itemPhoto = document.createElement('div');
        itemPhoto.classList.add('cart__item_photo');
        itemElem.appendChild(itemPhoto);
        const itemBody = document.createElement('div');
        itemBody.classList.add('cart__item_body');
        itemElem.appendChild(itemBody);
        const img = document.createElement('img');
        img.src = element.img;
        itemPhoto.appendChild(img);
        const itemTitle = document.createElement('div');
        itemBody.appendChild(itemTitle);
        itemTitle.classList.add('cart__item_title');
        itemTitle.innerHTML = element.name;
        const price = document.createElement('div');
        itemBody.appendChild(price);
        price.classList.add('cart__item_price');
        price.innerHTML = '$' + element.price;
        const itemButton = document.createElement('button');
        itemButton.classList.add('item__delete');
        itemElem.appendChild(itemButton);
        const imgButton = document.createElement('img');
        itemButton.appendChild(imgButton);
        imgButton.src = '../icons/page_cart/close.svg';
        cartBody.prepend(itemElem);
        itemButton.addEventListener('click', () => {
            itemElem.remove();
            actualCorz.splice(index,1);
            let changeActualCorz = JSON.stringify(actualCorz);
            localStorage.setItem('corz', changeActualCorz);
        });
    });
}

    
