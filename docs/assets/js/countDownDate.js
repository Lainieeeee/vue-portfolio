$(document).ready(function () {

    // data-countdown属性を持つ全ての要素に対して処理を行う
    $('.countDownDate[data-countdown]').each(function () {
        // data-countdown属性から日程を取得
        var countDownDate = $(this).data('countdown');
        // カウントダウンを開始
        startCountdown($(this), countDownDate);
    });
});

function startCountdown(element, endDate) {
    // endDateを日時オブジェクトに変換
    var targetDate = new Date(endDate).getTime();

    // カウントダウンを1秒ごとに更新
    var countdownInterval = setInterval(function () {
        var currentDate = new Date().getTime();
        var timeDifference = targetDate - currentDate;

        // 残り時間を計算
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // カウントダウンの表示
        var countdownText = "<span class='text-danger'>" + days + "</span>日<span class='text-danger'>" + hours + "</span>時<span class='text-danger'>" + minutes + "</span>分<span class='text-danger'>" + seconds + "</span>秒";
        element.html(countdownText);

        // カウントダウンが終了したら停止
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            element.html("<span>0</span>日<span>0</span>時<span>0</span>分<span>0</span>秒");
        }
    }, 1000);
}