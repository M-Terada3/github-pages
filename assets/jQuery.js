//top article//
const mainBox = document.querySelector('.p-pickUp__contents');
const boxes = document.querySelectorAll('.topArticle');
const prev = document.getElementById('p-topScroll__prevBtn');
const next = document.getElementById('p-topScroll__nextBtn');
let index = 0;

function boxChange() {
  boxes.forEach(topArticle => {
    topArticle.classList.add("hidden");
  });

  boxes[index].classList.remove("hidden");
  }

  function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
  }
  function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if (count < 0) count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
  }
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 3000);
  }
  function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }
  next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
  });
  prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
  startAutoPlay();

  boxChange();
});

//hamburger nav//
$(function() {
  $('.btn').on('click',function(){
      $('.btn').toggleClass('close');
      $('nav').fadeToggle(500);
    });
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