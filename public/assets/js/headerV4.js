$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".titleBanner").height();
        if (sliderHeight - 44 < $(this).scrollTop()) {
            $(".headerV4").addClass("transform");
        } else {
            $(".headerV4").removeClass("transform");
        }
    });
});