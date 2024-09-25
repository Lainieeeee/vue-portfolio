$('.countUpAnimate').each(function () {

    // データ属性から値を取得し、変数に格納
    var self = $(this),
        countTimer;

    function timer() {
        var $this = self,
            countTo = $this.attr('data-count');

        $({countNum: $this.text()}).animate({countNum: countTo}, {
            duration: 4000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    }

    // inviewプラグインを使用して表示領域に入ったかどうかを検出
    self.one('inview', function () {
        timer();
    });
});
