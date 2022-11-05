const keypad = document.querySelector('.keypad');
const display = document.querySelector('.display');
const operator = document.querySelectorAll('.operator');

keypad.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const keyInput = key.textContent;

    if (Number(key.textContent) >= 0 || Number(key.textContent) <= 9) {
      display.textContent += keyInput;
      console.log('key ' + keyInput);
    }
  }

  if (e.target.matches('button.key-del')) {
    display.textContent = display.textContent.slice(0, -1);
    console.log('del');
  }

  if (e.target.matches('button.key-plus')) {
    const numOne = Number(display.textContent) + 
  }
})
