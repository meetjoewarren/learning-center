const demoName = document.querySelector('.demo-name');
const demoNum = document.querySelector('.demo-number');
const demoExpMM = document.querySelector('.demo-exp-mm');
const demoExpYY = document.querySelector('.demo-exp-yy');
const demoCvc = document.querySelector('.demo-cvc');

const cardName = document.getElementById('cardholder');
const cardNum = document.getElementById('card-num');
const cardExpMM = document.getElementById('exp-month');
const cardExpYY = document.getElementById('exp-year');
const cardCvc = document.getElementById('cvc');

addEventListener('keyup', () => {
    if (cardNum.value) {
        let demoNumArray = Array.from(document.querySelector('.demo-number').innerText);
        demoNumArray = demoNumArray.filter(function (entry) { return entry.trim() != ''; });
        const cardNumArray = Array.from(cardNum.value);

        for (let i = 0; i < cardNumArray.length; i++) {
            if (cardNumArray[i] !== undefined) {
                demoNum.innerText = demoNumArray[i].replace(demoNumArray[i], cardNumArray[i]);
            } else {
                demoNumArray[i] = '0';
            }
        };
    };
});

// addEventListener('keyup', () => {

//   if (cardName.value) {
//     demoName.innerText = cardName.value;
//   } else {
//     demoName.innerText = 'Jane Appleseed';
//   }

//   if (cardNum.value) {
//     const firstSet = cardNum.value.slice(0, 4);
//     const secondSet = cardNum.value.slice(4, 8);
//     const thirdSet = cardNum.value.slice(8, 12);
//     const fourthSet = cardNum.value.slice(12, 16);

//     demoNum.innerText = `${firstSet} ${secondSet} ${thirdSet} ${fourthSet}`;
//   } else {
//     demoNum.innerHTML = '0000 0000 0000 0000';
//   }
//   addEventListener('change', () => {
//     if (cardExpMM.value) {
//       demoExpMM.innerText = cardExpMM.value;
//     } else {
//       demoExpMM.innerText = '00';
//     }

//     if (cardExpYY.value) {
//       demoExpYY.innerText = cardExpYY.value;
//     } else {
//       demoExpYY.innerText = '00';
//     }
//   });

//   if (cardCvc.value) {
//     demoCvc.innerText = cardCvc.value;
//   } else {
//     demoCvc.innerHTML = '000';
//   }

// });

const successEl = document.querySelector('.success-screen');
const cardFormEl = document.querySelector('.card-form');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', () => {
    cardFormEl.classList.add('hidden');
    successEl.classList.remove('hidden');
});