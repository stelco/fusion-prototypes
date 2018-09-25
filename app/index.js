//globals: $, jQuery and Tether, see config

import 'bootstrap';
// adds all custom Bootstrap jQuery plugins
// see all plugins here: http://getbootstrap.com/javascript/

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

  console.log('Initialized app');
  if ($('btn')) {
    console.log('jQuery works')
  }

  // initialize wow.js to watch when animations are scrolled into view
  new WOW().init();

  /*collapse (accordian) chevron*/
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

});

/*read more links*/

var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}


