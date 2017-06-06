$(function() {

$('.drop-box').click (function() {
  $('#ul')
    .fadeToggle();
});

$('.drop-box').on('click', function() {
  $(this).toggleClass('marked');
  $('.drop-text').toggleClass('marked1');
});

    






});