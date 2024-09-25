$(function () {
    $(".slickThumbnail .slider").slick({
        autoplay: false,
        arrows: false,
        asNavFor: ".thumbnail",
        speed: 200,
        infinite: false // 無限ループさせない
    });
    $(".slickThumbnail .thumbnail").slick({
        slidesToShow: 4,
        asNavFor: ".slider",
        focusOnSelect: true,
        prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-2"></i></span>',
        nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-2"></i></span>',
        speed: 200,
        responsive: [
            {
              breakpoint: 575.98, // 575.98px以下のサイズに適用
              settings: {
                slidesToShow: 3,
              },
            },
          ],
    });
  });