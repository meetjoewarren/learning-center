const keypad = document.querySelector('.keypad');
const display = document.querySelector('.display');
const operator = document.querySelectorAll('.operator');

keypad.addEventListener('click', e => {
  const key = e.target;
  const keyInput = key.textContent;

  if (e.target.matches('button')) {

    if (Number(key.textContent) >= 0 || Number(key.textContent) <= 9) {
      display.textContent += keyInput;
      console.log('key ' + keyInput);
    }
  }

  if (e.target.matches('button.key-del')) {
    display.textContent = display.textContent.slice(0, -1);
    console.log('del');
  }

  if (e.target.matches('button.operator')) {
    var operator = Number(display.textContent) + keyInput;
    console.log(operator);
  }

  if (e.target.matches('button.equal')) {
    display.textContent = operator +  Number(display.textContent); 
  }
})
