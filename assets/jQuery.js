$(function() {
  $('.btn').on('click',function(){// .btnをクリックすると〜
      $('.btn').toggleClass('close');// .btnにcloseというクラスが追加される
      $('nav').fadeToggle(500);// navの表示・非表示切り替わる
    });
  });