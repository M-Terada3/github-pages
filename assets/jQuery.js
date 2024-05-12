const images = document.querySelectorAll("p-pickUp__contents img");
let number = 0;

function changeImage() {
  images[number].classList.remove("active");
  number = (number + 1) % images.length;
  images[number].classList.add("active");
}

setInterval(changeImage, 2000);

//hamburger nav//
$(function () {
  $(".btn").on("click", function () {
    $(".btn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});


//page-top//
$(function () {
  $("#p-pageTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $("#p-pageTop").fadeIn(300).css("display", "flex");
    } else {
      $("#p-pageTop").fadeOut(300);
    }
  });
});
