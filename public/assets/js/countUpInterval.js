$('.countUpInterval').each(function () {

    // データ属性から値を取得し、変数に格納
    var self = $(this),
        countMax = self.data('count'),
        countSpeed = 50,
        thisCount = 0,
        countTimer;

    // 要素内でのカウントダウンを制御
    function timer() {
        countTimer = setInterval(function () {
            self.text(thisCount++);
            if (thisCount > countMax) clearInterval(countTimer);
        }, countSpeed);
    }

    // inviewプラグインを使用して表示領域に入ったかどうかを検出
    self.one('inview', function () {
        timer();
    });

});