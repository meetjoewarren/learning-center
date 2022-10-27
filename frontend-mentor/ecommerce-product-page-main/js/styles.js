const quantityInput = document.querySelector('.quantity-field');
const cartContent = document.querySelector('.cart__content');


// Toggle Mobile Menu
const mobileMenu = document.querySelector('.nav--main');
const mobileMenuBtn = document.querySelector('.menu-btn');
let toggleMenu = true;

mobileMenuBtn.addEventListener('click', function () {
    if (toggleMenu) {
        mobileMenu.classList.add('open');
        toggleMenu = false;
    }
    else {
        mobileMenu.classList.remove('open');
        toggleMenu = true;
    }
});

// Toggle Cart Menu
const cartIcon = document.querySelector('.cart__icon > a');
let toggleCart = true;

cartIcon.addEventListener('click', function () {
    const cartMenu = document.querySelector('.cart');
    if (toggleCart) {
        cartMenu.style.display = 'block';
        toggleCart = false;
    }
    else {
        cartMenu.style.display = 'none';
        toggleCart = true;
    }
});

// Quantity - Minus Increments
const btnMinus = document.querySelector('.btn--minus');

btnMinus.addEventListener('click', function () {
    if (quantityInput.value > 0) {
        quantityInput.value--;
    }
});

// Quantity - Plus Increments
const btnPlus = document.querySelector('.btn--plus');

btnPlus.addEventListener('click', function () {
    quantityInput.value++;
});

// Add To Cart / Update Cart Menu
let cartListItems = document.querySelectorAll('.cart__item');
let options = {
    childList: true,
    subtree: true
};
let observer = new MutationObserver(listUpdate);

function listUpdate(mutations) {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            console.log('Mutation Detected: A child node has been added or removed.');
        }
    }
}

const addToCart = document.querySelector('.add-to-cart button');

addToCart.addEventListener('click', function () {

    const cartIconNotif = document.querySelector('.cart__icon--new');
    const productTitle = document.querySelector('.product__info .title');

    if (quantityInput.value) {

        const image = document.querySelectorAll('.preview img')[0];
        const title = productTitle.textContent;
        const price = Number(document.querySelector('.product__info .price').textContent.replace("$", ""));
        const quantity = Number(quantityInput.value);

        // Update Cart Notification Icon Number
        cartIconNotif.textContent = Number(cartIconNotif.textContent) + Number(quantityInput.value);

        const cartLi = document.createElement('li');
        cartLi.classList.add('cart__item');
        cartLi.innerHTML = `
        <li class="cart__item">
            <div class="cart__body">
                <div class="cart__body--thumbnail">
                <a href="#"><img src="${image.src}" alt=""></a>
                </div>
                <div class="cart__body--info">
                <p class="cart__body--title">${title}</p>
                <span class="cart__body--price">$${price}</span>
                <span class="cart__body--quantity">x${quantity}</span>
                <span class="cart__body--subtotal">$${Number.parseFloat(price * quantity).toFixed(2)}</span>
                </div>
            </div>
            <div class="cart__item--remove">
                <img src="images/icon-delete.svg" alt="Remove">
            </div>
        </li>`;

        cartContent.append(cartLi);
    } 
    else {
        cartIconNotif.style.cssText = `
        display: none;
        padding: 0;
        `;
    }

    document.querySelector('.cart__body--title').textContent = productTitle.textContent;

    observer.observe(cartListItems, options);
});