let nav = document.querySelector('nav');
let header = document.querySelector('header');
let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');

$('.open-btn').click(function () {
  $('#nav').slideDown('slow');
  header.classList.add('header-height');
  nav.classList.remove('navigation');
  openBtn.classList.add('btn-hide');
  closeBtn.classList.remove('btn-hide');
});

$('.close-btn').click(function () {
  $('#nav').slideUp('slow');
  header.classList.remove('header-height');
  nav.classList.add('navigation');
  closeBtn.classList.add('btn-hide');
  openBtn.classList.remove('btn-hide');
});

/* --------------- Sticky Navbar --------------- */
