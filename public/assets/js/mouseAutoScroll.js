// activeタグを含むliが可視できるよう、横スクロール位置を自動調整
$(document).ready(function () {

    function scrollToActive() {

        // activeタグを含むliの順番を取得
        var activeIndex = $('.mouseDragScroll li a.active').parent().index();
        var totalWidth = 0;


        if (window.innerWidth <= 767.98) { // ~767.98px
            // activeタグを含むliより前のliの幅を計算
            $('.mouseDragScroll li:lt(' + activeIndex + ')').each(function () {
                totalWidth += $(this).outerWidth(true);
            });

            // mouseDragScrollに上記で計算した幅をスクロールさせる
            var scrollContainer = document.querySelector('.mouseDragScroll');
            scrollContainer.scrollLeft = totalWidth;
        }
        
    }

    // 初回
    scrollToActive();

    // ページがリサイズされたらイベントを再実行させる
    window.addEventListener('resize', function () {
        scrollToActive();
    });

});