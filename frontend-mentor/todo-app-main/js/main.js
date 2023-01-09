const usrInput = document.getElementById('create-new');
const deleteBtn = document.querySelectorAll('.btn-del');
const inputCB = document.querySelectorAll('.input__cb');
const todoLabel = document.querySelectorAll('.todo__label');

function addToList() {
  const input = document.createElement('input');
        input.className = 'input__cb';
        input.id = 'input';
        input.type = 'checkbox';
  const spanCB = document.createElement('span');
        spanCB.className = 'custom__checkbox';
  const label = document.createElement('label');
        label.className = 'todo__label';
        label.setAttribute('for', 'input');
        label.textContent = usrInput.value;
      label.appendChild(spanCB);
  const img = document.createElement('img');
        img.src = './images/icon-cross.svg';
  const button = document.createElement('button');
        button.className = 'btn-del';
        button.type = 'button';
        button.appendChild(img);
  const listItem = document.createElement('li');
        listItem.className = 'todo__list--item';
        listItem.draggable = 'true';
        listItem.appendChild(input);
        listItem.appendChild(label);
        listItem.appendChild(button);
  const details = document.querySelector('.todo__list--details'); 
  const fragment = new DocumentFragment();
        fragment.appendChild(listItem);
  const list = document.querySelector('.todo__list');
        list.insertBefore(fragment, details);

  usrInput.value = '';
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', e => {
    e.target.parentElement.parentElement.remove();
  })

  if (inputCB.checked == true) {
    todoLabel[i].classList.add('strikeout');
  } else {
    todoLabel[i].classList.remove('strikeout');
  }
}

usrInput.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    addToList();
  }
})
