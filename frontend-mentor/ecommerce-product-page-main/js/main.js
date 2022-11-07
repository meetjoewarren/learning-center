const quantityInput = document.querySelector('.quantity-field');
const cartNotifIcon = document.querySelector('.cart__link--new');
const cartContainer = document.querySelector('.cart__content');
const cartItems = document.getElementsByClassName('cart__item');

// Toggle Mobile Menu
let menuToggle = true;

addGlobalEventListeners('click', '.menu-btn', e => {
  const mobileMenu = document.querySelector('.nav--main');
  if (menuToggle) {
    mobileMenu.classList.add('open');
    menuToggle = false;
  }
  else {
    mobileMenu.classList.remove('open');
    menuToggle = true;
  }
})

// Toggle Cart Menu
let cartToggle = true;

addGlobalEventListeners('click', '.cart__icon', e => {
  console.log('cart open');
  const cartMenu = document.querySelector('.cart');
  if (cartToggle) {
    cartMenu.style.display = 'block';
    cartToggle = false;
  }
  else {
    cartMenu.style.display = 'none';
    cartToggle = true;
  }
})

// Quantity - Minus Increments
addGlobalEventListeners('click', '.btn--minus', e => {
  if (quantityInput.value > 0) {
    quantityInput.value--;
  }
})
// Quantity - Plus Increments
addGlobalEventListeners('click', '.btn--plus', e => {
  quantityInput.value++;
})

addGlobalEventListeners('click', '.cart__content', e => {
  if (e.target.matches('.cart__item--remove')) {
    const quantityToRemove = e.target.parentNode.querySelector('.cart__body--quantity');
    console.log(quantityToRemove);
    e.target.parentNode.remove();
  }
})

// Add To Cart
addGlobalEventListeners('click', '.btn--add-to-cart', e => {
  console.log('item added');
  document.querySelector('.cart__item--empty').style.display = 'none';
  const productTitle = document.querySelector('.product__info .title');
  if (quantityInput.value) {
    // Product Details
    const cartImage = document.querySelectorAll('.preview img')[0];
    const cartTitle = productTitle.textContent;
    const cartPrice = Number(document.querySelector('.product__info .price').textContent.replace("$", ""));
    const cartQuantity = Number(quantityInput.value);
    // Cart Item / HTML
    const createListItem = document.createElement('li');
    createListItem.classList.add('cart__item');
    createListItem.innerHTML = `
        <div class="cart__body">
          <div class="cart__body--thumbnail">
            <a href="#"><img src="${cartImage.src}" alt=""></a>
          </div>
          <div class="cart__body--info">
            <p class="cart__body--title">${cartTitle}</p>
            <span class="cart__body--price">$${cartPrice}</span>
            <span class="cart__body--quantity">x${cartQuantity}</span>
            <span class="cart__body--subtotal">$${Number.parseFloat(cartPrice * cartQuantity).toFixed(2)}</span>
          </div>
        </div>
        <div class="cart__item--remove">
            <img src="images/icon-delete.svg" alt="Remove">
        </div>`;
    cartContainer.append(createListItem);

    // Update Cart Item Total
    cartNotifIcon.style.display = 'block';
    const cartItemQuantity = document.querySelectorAll('.cart__body--info span:nth-child(3)');
    let counter = 0;
    for (let i = 0; i < cartItems.length; i++) {
      counter += Number(cartItemQuantity[i].textContent.replace("x", ""));
      cartNotifIcon.textContent = counter;
    }

    //// ATTEMPT # 1
    // for (const cartItem of cartItems) {
    //   const button = cartItem.querySelector('.cart__item--remove');
    //   button.addEventListener('click', function () {
    //     const removeQuantityTotal = cartItem.querySelector('.cart__body--quantity');
    //     cartNotifIcon.textContent = Number(cartNotifIcon.textContent) - Number(removeQuantityTotal.textContent.replace('x', ''));
    //     cartItem.remove();
    //     console.log(cartNotifIcon.textContent);
    //   })
    // }
    //// ATTEMPT #2
    // for (let r = 0; r < cartItems.length; r++) {
    //   const button = document.querySelectorAll('.cart__item--remove');
    //   button[r].addEventListener('click', function () {
    //     const removeQuantityTotal = cartItems[r].querySelector('.cart__body--quantity');
    //     cartNotifIcon.textContent = Number(cartNotifIcon.textContent) - Number(removeQuantityTotal.textContent.replace('x', ''));
    //     cartItems[r].remove();
    //   })
    // }

    // const removeButtons = document.querySelectorAll('.cart__item--remove');
    // for (let i = 0; i < cartItems.length; i++){
    //   Array.from(removeButtons).forEach(button => button.addEventListener('click', function () {
    //     const itemQuantity = Number(cartItems[i].querySelector('.cart__body--quantity').textContent.replace('x', ''));
    //     cartNotifIcon.textContent = Number(cartNotifIcon.textContent) - itemQuantity;
    //     console.log(itemQuantity)
    //     button.parentNode.remove();
    //   }))
    // }
  }
  else {
    cartNotifIcon.style.cssText = `
        display: none;
        padding: 0; 
      `;
  }
})
// for (let i = 0; i < cartItems.length; i++) {
//   removeCartButton.addEventListener('click', function() {
//     console.log('clicked');
//     cartItems[i].remove();
//   })
// }



// function updateCartTotal() {
//   let counter = 0;
//   for (let i = 0; i < cartItems.length; i++) {
//     const cartItemQuantity = document.querySelectorAll('.cart__body--info span:nth-child(3)');
//     counter += Number(cartItemQuantity[i].textContent.replace("x", ""));
//     cartNotifIcon.textContent = counter;
//   }
// }

function addGlobalEventListeners(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e);
  })
}