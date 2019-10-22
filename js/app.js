const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelector('.nav-link');

const openMenu = () => {
  console.log('clicked');
  navbar.classList.toggle('column');
  navLink.classList.toggle('show');
};
menu.addEventListener('click', openMenu);
