const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open')
});