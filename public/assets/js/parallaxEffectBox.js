$(function() {
    var layer = $('.parallaxEffectBox');

    // ページ読み込み時に初期位置を設定
    $('.parallaxEffect').each(function() {
        // data属性から位置を取得
        var positionTop = $(this).data('position-top');
        var positionLeft = $(this).data('position-left');
        $(this).css({
            'top': positionTop + '%',
            'left': positionLeft + '%',
            'transform': 'translate(0)'
        });
    });
    
    layer.mousemove(function(e) {
        var offsetX = e.pageX - layer.width() / 2;
        var offsetY = e.pageY - layer.height() / 2;

        // 各要素の移動速度を取得して適用
        $('.parallaxEffect').each(function() {
            var speedX = $(this).data('speed-x');
            var speedY = $(this).data('speed-y');
            var valueX = offsetX * speedX / 1000; // 分かりやすくするために1000で割る
            var valueY = offsetY * speedY / 1000; // 分かりやすくするために1000で割る
            
            // data属性から位置を取得
            var positionTop = $(this).data('position-top');
            var positionLeft = $(this).data('position-left');
            
            // 位置を適用
            $(this).css({
                'top': positionTop + '%',
                'left': positionLeft + '%',
                'transform': 'translate3d(' + valueX + 'px, ' + valueY + 'px, 0)'
            });
        });
    });
});