const items = document.querySelectorAll('.item');
const submitBtn = document.querySelector('button');

for (const item of items) {
    if (item.classList !== 'selected') {
        this.classList.add('selected');
        const str = `You selected ${this.innerText} out of 5`;
        document.querySelector('.user-selection').innerText = str;
    } else {
        this.classList.remove('selected');
    }
    
    item.addEventListener('click', function () {

    });
};

submitBtn.addEventListener('click', function () {
    document.querySelector('.main-content').classList.add('hidden');
    document.querySelector('.thanks-content').classList.remove('hidden');
});