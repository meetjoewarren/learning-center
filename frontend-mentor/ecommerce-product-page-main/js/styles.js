const quantityInput = document.querySelector('.quantity-field');
const cartContent = document.querySelector('.cart__content');
const cartIconNotif = document.querySelector('.cart__icon--new');

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
const minus = document.querySelector('.btn--minus');

minus.addEventListener('click', function () {
    if (quantityInput.value > 0) {
        quantityInput.value--;
    }
});

// Quantity - Plus Increments
const plus = document.querySelector('.btn--plus');

plus.addEventListener('click', function () {
    quantityInput.value++;
});

// Remove Item / Update Cart

let observer = new MutationObserver(listUpdate);

function listUpdate(mutations) {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            const cartListItems = document.querySelectorAll('.cart__item');

            // for (const item of cartListItems) {
            //     const removeFromCart = document.querySelectorAll('.cart__item--remove');

            //     removeFromCart.addEventListener('click', () => {
            //             item.remove();
            //     });
            // }
            
            for (let i = 0; i < cartListItems.length; i++) {
                const removeFromCart = document.querySelectorAll('.cart__item--remove');
                removeFromCart[i].addEventListener('click', function () {
                    const quantity = document.querySelectorAll('.cart__body--quantity');
                    cartIconNotif.textContent = Number(cartIconNotif.textContent) - Number(quantity[i].textContent.replace("x", ""));
                    console.log(Number(cartIconNotif.textContent) - Number(quantity[i].textContent.replace("x", "")));
                    cartListItems[i].remove();
                });
            }
            
            const cartItemEmpty = document.querySelector('.cart__item--empty');
            cartItemEmpty.remove();
        }
        else {
            const emptyListItem = document.createElement('.li');
            emptyListItem.classList.add('.cart__item--empty');
            emptyListItem.textContent = 'Your cart is empty.';
            cartContent.append(emptyListItem);
        }
    }
}

observer.observe(cartContent, {childList: true, subtree: true});

// Add to cart
const addToCart = document.querySelector('.add-to-cart button');

addToCart.addEventListener('click', function () {

    const productTitle = document.querySelector('.product__info .title');

    if (quantityInput.value) {
        const image = document.querySelectorAll('.preview img')[0];
        const title = productTitle.textContent;
        const price = Number(document.querySelector('.product__info .price').textContent.replace("$", ""));
        const quantity = Number(quantityInput.value);

        // Update Cart Notification Icon Number
        cartIconNotif.style.display = 'block';
        cartIconNotif.textContent = Number(cartIconNotif.textContent) + Number(quantityInput.value);

        const cartLi = document.createElement('li');
        cartLi.classList.add('cart__item');
        cartLi.innerHTML = `
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
            </div>`;

        cartContent.append(cartLi);
    } 
    else {
        cartIconNotif.style.cssText = `
        display: none;
        padding: 0;
        `;
    }

    document.querySelector('.cart__body--title').textContent = productTitle.textContent;
});





const handleCartItemCount = () => {
    const wrapper = document.querySelector('.cart_items_content');
    const items = wrapper.querySelectorAll('.single_cart_item');
    let count = 0;
    items.forEach((item, index) => {
        count = `${index + 1}`;
    });
    itemCount.innerText = count;
};

// REMOVE
const handleRemoveItem = () => {
    const wrapper = document.querySelector('.cart_items_content');
    const items = wrapper.querySelectorAll('.single_cart_item');
    items.forEach((item) => {
        const removeBtn = item.querySelector('.remove_btn');
        removeBtn.addEventListener('click', () => {
            //handleCartItemCount();
            item.remove();
            handleCartItemCount();
        });
    });
};

// cart total amount
const totalAmount = (item) => {
    const single_item = item.querySelectorAll('.single_cart_item');
    const totalAmount = document.querySelector('.cart_amt');
    let total = 0;
    single_item.forEach((item) => {
        const price = item.querySelector('.price').innerText;
        const priceValue = parseInt(price.replace('$', ''));
        total += priceValue;
    });
    totalAmount.innerText = `$${total}`;
};

function addGlobalEventListeners(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}