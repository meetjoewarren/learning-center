const markReadBtn = document.querySelector('button');
const username = document.querySelectorAll('.username');
const counter = document.querySelector('.counter');

counter.textContent = document.querySelectorAll('.unread').length;

markReadBtn.addEventListener('click', function () {
    const unread = document.querySelectorAll('.unread');
    const unreadItem = document.querySelectorAll('.unread-item');

    for (let i = 0; i < unread.length; i++) {
        unread[i].classList.remove('unread');
        unreadItem[i].classList.remove('unread-item');
        counter.textContent = 0;
    }
});


function altText() {
    for (let i = 0; i < username.length; i++) {
        document.querySelector('.user-photo img').alt = username[i].innerText;
    }
}

altText();