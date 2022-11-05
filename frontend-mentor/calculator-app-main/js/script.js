const keypad = document.querySelector('.keypad');
const display = document.querySelector('.display');

keypad.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const keyInput = key.textContent;
        if (Number(display.textContent) >= 0 || Number(display.textContent) <= 9) {
            display.textContent = keyInput;
        }
        else { return; }

        console.log(keyInput)
    }
})