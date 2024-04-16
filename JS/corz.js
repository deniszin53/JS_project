document.addEventListener('DOMContentLoaded', () => {
    let actualCorzStr = localStorage.getItem('corz');
    const priceCount = () => {
        let totalPrice = 0;
        let subTotalPrice = 0;
        let discSum = 0;
        actualCorzStr = localStorage.getItem('corz');
        const actualCorz = JSON.parse(actualCorzStr);
        const total = document.getElementById('total'); 
        const subtotal = document.getElementById('subtotal'); 
        const discount = document.getElementById('disc'); 
        subTotalPrice = 0;
        if (actualCorz.length===0) {
            subtotal.innerHTML = '00';
            total.innerHTML = '00';
            discount.innerHTML = '00';
        }
        else {
            actualCorz.forEach((cartItem) => {
                subTotalPrice += cartItem.element.price;
                if (cartItem.element.discount) {
                    discSum += cartItem.element.discount;
                }
            });
            totalPrice = subTotalPrice - discSum;
            if (subTotalPrice!==0) {
                subtotal.innerHTML = String(subTotalPrice);
            }
            else {
                subtotal.innerHTML = '00';
            }
            if (totalPrice!==0) {
                total.innerHTML = String(totalPrice)
            }
            else {
                total.innerHTML = '00';
            }
            if (discSum!==0) {
                discount.innerHTML = String(discSum);
            }
            else {
                discount.innerHTML = '00';
            }
        }
    };

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
            itemElem.prepend(itemBody);
            const img = document.createElement('img');
            img.src ='.'+ element.img;
            itemPhoto.appendChild(img);
            const itemTitle = document.createElement('div');
            itemBody.prepend(itemTitle);
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
                actualCorz.forEach((elem,id) => {
                    if (itemButton.parentElement.firstChild.firstChild.textContent===elem.element.name){
                        actualCorz.splice(id, 1);
                        let changeActualCorz = JSON.stringify(actualCorz);
                        localStorage.setItem('corz', changeActualCorz);
                    }
                })
                itemElem.remove();
                priceCount();
            });
        });
    };
    priceCount();
});




