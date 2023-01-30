//********************** Smoth scroll js ********************

$("nav").on('click','a',function (event) {
    event.preventDefault();
    var elAttr = $(this).attr('href');
    $('body,html').animate({
        scrollTop: $(elAttr).offset().top -100
    },1200);
});

//********************** Wow animate js ********************
// new WOW().init();

//********************** Scroll to Top ********************
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});


$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});

//********************** Sticky Navbar ********************

$(window).on('scroll', function () {

    if ($(window).scrollTop() > 200) {

        $('#header').addClass("positionFixed");

    } else {

        $('#header').removeClass("positionFixed");

    }

});


