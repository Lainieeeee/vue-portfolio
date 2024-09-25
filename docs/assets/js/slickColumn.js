$('.slickColumn').slick({
    // autoplay: true, // ループ
    // speed: 1000, // スライドのスピード
    // autoplaySpeed: 4000, // スライドが切り替わる間の秒数

     // ページネーション
    dots: false,

    // 矢印ボタン
    prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-2"></i></span>',
    nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-2"></i></span>',

    // 表示させるスライド数
    slidesToShow: 2,

    // 1回でスライドさせる数
    slidesToScroll: 1,

    // 1スライドに表示させる行
    rows: 3,

    // スライドの高さの自動調整
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 767.98, // 767.98px以下のサイズに適用
        settings: {
          rows: 2,
        },
      },{
        breakpoint: 575.98, // 575.98px以下のサイズに適用
        settings: {
          rows: 1,
        },
      },
    ],


});