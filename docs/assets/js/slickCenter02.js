$('.slickCenter02').slick({
    autoplay: true, // ループ
    speed: 1000, // スライドのスピード
    autoplaySpeed: 4000, // スライドが切り替わる間の秒数

     // ページネーション
    dots: false,

    // 矢印ボタン
    prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-1 text-orange"></i></span>',
    nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-1 text-orange"></i></span>',

    // 表示させるスライド数
    slidesToShow: 3,

    // 1回でスライドさせる数
    slidesToScroll: 1,

    // スライドの高さの自動調整
    adaptiveHeight: true,

    responsive: [
        {
          breakpoint: 991.98, // 991.98px以下のサイズに適用
          settings: {
            slidesToShow: 2,
          },
        },{
          breakpoint: 767.98, // 767.98px以下のサイズに適用
          settings: {
            slidesToShow: 1,
          },
        },
      ],


});