var toggler = document.getElementById('toggler');
toggler.addEventListener('click', activateButtons);
function activateButtons(e) {
  e.preventDefault();
  document.getElementById('buttons-main').classList.toggle('page-header__buttons-main--active');
  document.getElementById('main-nav').classList.toggle('main-nav--active');
}
