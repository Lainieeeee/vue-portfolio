$('.slickCenter').slick({
    // autoplay: true, // ループ
    // speed: 1000, // スライドのスピード
    // autoplaySpeed: 4000, // スライドが切り替わる間の秒数

     // ページネーション
    dots: false,

    // 矢印ボタン
    prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-2 text-warning"></i></span>',
    nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-2 text-warning"></i></span>',

    // 表示させるスライド数
    slidesToShow: 1,

    // 1回でスライドさせる数
    slidesToScroll: 1,

    // スライドの高さの自動調整
    adaptiveHeight: true,

    // 1つ目を中央にする
    // 左右10%見切れ表示にする
    centerMode:true,
    centerPadding:'10%',

    responsive: [
        {
          breakpoint: 767.98, // 767.98px以下のサイズに適用
          settings: {
            centerMode:false,
            centerPadding:'0',
          },
        },
      ],


});