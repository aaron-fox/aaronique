$(document).ready(function () {
  if ($(window).width() > 500) {
    $(this).scrollTop(290);
  } else {
    $(this).scrollTop(290 / 490 * $(window).width());
  }
});