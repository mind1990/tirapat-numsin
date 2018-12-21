$(document).ready(function () {
  /* Scroll on buttons */

  $('.js--scroll-to-about').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-about').offset().top }, 1000);
  });

  $('.js--scroll-to-projects').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-projects').offset().top }, 1000);
  });

  $('.js--scroll-to-skills').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-skills').offset().top }, 1000);
  });

  $('.js--scroll-to-contact').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-contact').offset().top }, 1000);
  });
});