const demoName = document.querySelector('.demo--name');
const demoNum = document.querySelector('.demo--number');
const demoExpMM = document.querySelector('.demo--exp-mm');
const demoExpYY = document.querySelector('.demo--exp-yy');
const demoCvc = document.querySelector('.demo--cvc');
const cardName = document.getElementById('cardholder');
const cardNum = document.getElementById('card-num');
const cardExpMM = document.getElementById('exp-month');
const cardExpYY = document.getElementById('exp-year');
const cardCvc = document.getElementById('cvc');
const cardFormEl = document.querySelector('.card__form');
const successEl = document.querySelector('.success-screen');

addEventListener('keyup', () => {

    validate();

    if (cardName.value) {
        demoName.innerText = cardName.value;
    }
    else {
        demoName.innerText = 'Jane Appleseed';
    };

    if (cardNum.value) {
        demoNum.innerText = cardNum.value.padEnd(16, '0').replace(/(.{4})/g, '$1 ');
        // const cardNumFormat = cardNum.value.match(/.{1,4}/g);
        // cardNum.value = cardNumFormat.join(' ');

    }
    else {
        demoNum.innerText = '0000 0000 0000 0000';
    };

    if (cardExpMM.value) {
        demoExpMM.innerText = cardExpMM.value;
    }
    else {
        demoExpMM.innerText = '00';
    };

    if (cardExpYY.value) {
        demoExpYY.innerText = cardExpYY.value;
    }
    else {
        demoExpYY.innerText = '00';
    };

    if (cardCvc.value) {
        demoCvc.innerText = cardCvc.value;
    }
    else {
        demoCvc.innerText = '000';
    }
});

document.querySelector('.submit').addEventListener('click', evt => {

    if (!cardName.value || !cardNum.value || !cardExpMM.value || !cardExpYY.value || !cardCvc.value) {
        validate();
        evt.preventDefault();
    }
    else {
        cardFormEl.classList.add('hidden');
        successEl.classList.remove('hidden');
    }
});

function validate() {
    const input = document.querySelectorAll('input');
    const error = document.querySelectorAll('error');
    const span = document.createElement('span');

    for (const i of input) {
        if (!i.value) {
            i.dataset.state = 'invalid';
            // error.style.display = 'inline-block';
            // error.innerText = 'Can\'t be blank';
        } else {
            i.dataset.state = 'valid';
        }
    }
}

// function validation () {
//     const cardFormEl = document.querySelector('.card-form');
//     const input = document.querySelectorAll('input');
//     const successEl = document.querySelector('.success-screen');
//     const error = document.querySelectorAll('.error');

//     if (!cardName.value) {
//         invalid[0].style.display = 'block';
//         error[0].innerText = 'Wrong format, letters only';
//     } 

//     if (!cardNum.value) {
//         error[1].style.display = 'block';
//         error[1].innerText = 'Wrong format, numbers only';
//     }

//     if (!cardExpMM.value || !cardExpYY.value) {
//         error[2].style.display = 'inline-block';
//         error[2].innerText = 'Can\'t be blank';
//     }

//     if (!cardCvc.value) {
//         input[4].style.borderColor = 'red';
//         error[3].style.display = 'inline-block';
//         error[3].innerText = 'Can\'t be blank';
//     }

//     if (cardName.value && cardNum.value && cardExpMM.value && cardExpYY.value && cardCvc.value) {
//         cardFormEl.classList.add('hidden');
//         successEl.classList.remove('hidden');
//     }

    
// };