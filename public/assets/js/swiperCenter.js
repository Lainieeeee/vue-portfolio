$(function(){
    var swiper = new Swiper(".swiperCenter .swiper", {
        loop: true, // ループ
        // speed: 1000, // スライドのスピード
        // autoplay: {
        //     delay: 4000, // スライドが切り替わる間の秒数
        // },
        navigation: { // 矢印ボタン
            nextEl: '.swiperBtn.next',
            prevEl: '.swiperBtn.prev',
        },
        pauseOnMouseEnter: false, // ホバー時に自動再生を停止しない
        pauseOnFocus: false, // フォーカス時に自動再生を停止しない

        // スライド同士の余白
        spaceBetween: 10,

        // スライドの表示枚数
        slidesPerView: 1,

        // ブレークポイント
        breakpoints: {
            767.98: { //767.98px以上の場合
              slidesPerView: 3,
            },
            374.98: { //767.98px以上の場合
              slidesPerView: 2,
            },
        }

    });
});