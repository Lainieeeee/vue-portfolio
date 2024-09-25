$(function(){
    var swiper = new Swiper(".swiperNormal .swiper", {
        loop: true, // ループ
        speed: 1000, // スライドのスピード
        autoplay: {
            delay: 4000, // スライドが切り替わる間の秒数
        },
        navigation: { // 矢印ボタン
            nextEl: '.swiperBtn.next',
            prevEl: '.swiperBtn.prev',
        },
        pagination: { // ページネーション
            el: ".swiperPagination",
            clickable: true, // クリック可能にする
            // type: "fraction", // 番号にする場合V1
            // renderBullet: function (index, className) { // 番号にする場合V2
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
        pauseOnMouseEnter: false, // ホバー時に自動再生を停止しない
        pauseOnFocus: false, // フォーカス時に自動再生を停止しない

        // スライド同士の余白
        spaceBetween: 30,

        // fade切り替えにしたい場合
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true // スライドの重なりを解消
        // },

        // 立体切り替えしたい場合
        // effect: 'cube',

        // coverflow切り替えしたい場合
        // effect: 'coverflow',

        // flip切り替えしたい場合
        // effect: 'flip',

        // cards切り替えしたい場合
        // effect: 'cards',


    });
});