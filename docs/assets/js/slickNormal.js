$('.slickNormal').slick({
    // autoplay: true, // ループ
    // speed: 1000, // スライドのスピード
    // autoplaySpeed: 4000, // スライドが切り替わる間の秒数

     // ページネーション
    dots: true,
    dotsClass: "slickPagination", // オリジナルでカスタマイズする

    // 矢印ボタン
    prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-2"></i></span>',
    nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-2"></i></span>',

    // 表示させるスライド数
    slidesToShow: 1,

    // スライドの高さの自動調整
    adaptiveHeight: true,

    // 縦方向にスライド
    // vertical: true,

    // スワイプさせない
    // swipe: false,

    // マウスオーバー中もスライドを停止させない
    pauseOnHover: false,

    // スライダをフォーカスしても自動再生を一時停止させない
    pauseOnFocus: false,

    // fade切り替えにしたい場合
    // fade: true,

});