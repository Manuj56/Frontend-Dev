$(function () {
    var banners = $("#bannerContainer .banner");
    var currentIndex = 0;

    $("#hideBtn").on("click", function () {
        $(".banner.special").hide();
    });

    $("#showBtn").on("click", function () {
        banners.show();
    });

    $("#slideToggleBtn").on("click", function () {
        banners.slideToggle();
    });

    $("#fadeToggleBtn").on("click", function () {
        banners.fadeToggle();
    });

    banners.hide().eq(0).show();

    setInterval(function () {
        banners.eq(currentIndex).fadeOut(function () {
            currentIndex = (currentIndex + 1) % banners.length;
            banners.eq(currentIndex).fadeIn();
        });
    }, 5000);
});
