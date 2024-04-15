const nav = document.querySelector('#nav');
const closse = document.querySelector('#close');
const menuBar = document.querySelector('#menu_bar');

if (closse) {
    closse.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

if (menuBar) {
    menuBar.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

// circle

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map((char, ind) => {

    return `<span style='transform:rotate(${ind * 14}deg)'>${char}</span>`

}).join('');