$(function() {
  $('.btn').on('click',function(){
      $('.btn').toggleClass('close');
      $('nav').fadeToggle(500);
    });
  });