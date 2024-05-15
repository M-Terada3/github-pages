//sp fixMenu//
var navPos = jQuery( '#mainMenu' ).offset().top;
var navHeight = jQuery( '#mainMenu' ).outerHeight();
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'main' ).css( 'padding-top', navHeight );
		jQuery( '#mainMenu' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'main' ).css( 'padding-top', 0 );
		jQuery( '#mainMenu' ).removeClass( 'm_fixed' );
	}
});

//pc fixMenu//
$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll > 700) {
			$('#fixNav').addClass('is-show');
		}
		else {
			$('#fixNav').removeClass('is-show');
		}
	});
});


//hamburger nav//
$(function () {
  $(".btn").on("click", function () {
    $(".btn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

$(function () {
  $(".fixBtn").on("click", function () {
    $(".fixBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150 ) {
      $(".fixBtn").fadeIn();
    } else {
      $(".fixBtn").fadeOut(1);
    }
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
