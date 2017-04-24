var toggler = document.getElementById('toggler');
toggler.addEventListener('click', activateButtons);
function activateButtons(e) {
  e.preventDefault();
  document.getElementById('buttons-main').classList.toggle('page-header__buttons-main--active');
  document.getElementById('main-nav').classList.toggle('main-nav--active');
}

var articles = document.querySelectorAll('.article');
var articlesColors = [
  '#08b0e0',
  '#ef5c5c',
  '#3360b2',
  '#2eb398',
  '#ae0a0a',
  '#5692b1'
];

window.onload = function() {
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.borderBottomColor = articlesColors[i];
  }
}
