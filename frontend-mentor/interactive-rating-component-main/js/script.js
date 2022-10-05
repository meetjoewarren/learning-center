const items = document.querySelectorAll('.item');
const submitBtn = document.querySelector('button');

for (const item of items) {
    item.addEventListener('click', function () {
        this.classList.add('selected');
        const rate = this.innerText;
        const str = `You selected ${rate} out of 5`;
        document.querySelector('.user-selection').innerText = str;
    })
};

submitBtn.addEventListener('click', function () {
    document.querySelector('.main-content').classList.add('hidden');
    document.querySelector('.thanks-content').classList.remove('hidden');
});