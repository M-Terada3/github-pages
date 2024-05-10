

const images = document.querySelectorAll('p-pickUp__contents img');
let number = 0;

function changeImage() {
  images[number].classList.remove('active');
  number = (number + 1) % images.length;
  images[number].classList.add('active');
}

setInterval(changeImage, 2000);



//hamburger nav//
$(function() {
  $('.btn').on('click',function(){
      $('.btn').toggleClass('close');
      $('nav').fadeToggle(500);
    });
  });

function FixedAnime() {
  var elemTop = $('#ham-area').offset().top;//#ham-areaの位置まできたら
  var scroll = $(window).scrollTop();
  if(scroll <= 20){//上から20pxスクロールされたら
    $('#btn').addClass('DownMove');//DownMoveというクラス名を除き
  } else if (scroll >= elemTop){
      $('#btn').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
      $('#btn').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

    }else{
      if($('#btn').hasClass('DownMove')){//すでに#headerにDownMoveというクラス名がついていたら
        $('#btn').removeClass('DownMove');//DownMoveというクラス名を除き
        $('#btn').addClass('UpMove');//UpnMoveというクラス名を付与
      }
    }
}

  // //ナビゲーションをクリックした際のスムーススクロール
  // $('#g-navi a').click(function () {
  //   var elmHash = $(this).attr('href'); //hrefの内容を取得
  //   var pos = Math.round($(elmHash).offset().top-70); //headerの高さを引く
  //   $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  //   return false;//リンクの無効化
  // });

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });


 //page-top//
  $(function () {
    $("#p-pageTop").click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $('#p-pageTop').fadeIn(300).css('display', 'flex')
      } else {
        $('#p-pageTop').fadeOut(300)
      }
    });
  });