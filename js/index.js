function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.min(document.documentElement.clientHeight, window.innerHeight);
  elmHeight = parseInt(window.getComputedStyle(elm).height.split('px')[0]);
  return !(rect.bottom - elmHeight * 0.6 < 0 || rect.top - viewHeight + elmHeight * 0.6 >= 0);
}

window.addEventListener('scroll', function() {
  var elms = document.getElementsByClassName('card-container')
  for (var i=0; i<elms.length; i++) {
    if (checkVisible(elms[i])) {
      elms[i].classList.add('hover');
    }
    else {
      elms[i].classList.remove('hover');
    }
  }
});
