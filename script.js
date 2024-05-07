window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');

  if (window.scrollY > 550) {
    header.classList.add('header-transparent');
  } else {
    header.classList.remove('header-transparent');
  }
});

const menuButton = document.querySelector('#header__burguer');
const menu = document.querySelector('#menu__burguer');
const header = document.querySelector('.header');
const menuItems = menu.querySelectorAll('a');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    header.classList.add('header-green');
    menuButton.innerText = 'close'
  } else {
    header.classList.remove('header-green');
    menuButton.innerText = 'menu'
  }

});

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    menu.classList.remove('show');

    if (menu.classList.contains('show')) {
      header.classList.add('header-green');
      menuButton.innerText = 'close'
    } else {
      header.classList.remove('header-green');
      menuButton.innerText = 'menu'
    }
  });
});

