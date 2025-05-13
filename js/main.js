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

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' 
    });
    
    menu.classList.remove('menu--open');
  });
});


const button = document.querySelector('.header__button');
const modal = document.getElementById('template-modal');
const closeBtn = modal.querySelector('.modal__close');

button.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});


window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.querySelector('.header__button').addEventListener('click', function(e) {
  e.preventDefault();
  


  const link = document.createElement('a');
  link.href = '"C:\Users\ddv\Downloads\programmirov.webp"'; 
  link.download = 'programmirov.webp'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
