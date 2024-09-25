$(function(){
    const swiper = new Swiper(".swiperFadeinAnimation.swiper", {
        loop: true,
        speed: 1000, // スライドのスピード
        autoplay: {
            delay: 4000, // スライドが切り替わる間の秒数
            disableOnInteraction: false,
        },
        pauseOnMouseEnter: false, // ホバー時に自動再生を停止しない
        pauseOnFocus: false, // フォーカス時に自動再生を停止しない
        navigation: {
            nextEl: ".swiperBtn.next",
            prevEl: ".swiperBtn.prev",
        }
    });
});