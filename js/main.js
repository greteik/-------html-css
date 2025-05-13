const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open')
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
  }
});

