$(function () {

    // typingAnimation 要素が表示領域に入ったときに1回だけ実行
    $(".typingAnimation").one("inview", function () {
        animateText($(this));
    });

    // テキストアニメーションを開始する関数
    function animateText(element) {
        var text = element.text();
        element.css('visibility', 'visible').empty(); // 初期テキストをクリアして表示を可能にする
        typeWriter(element[0], text, 0); // タイピングアニメーションを開始
    }

    // タイピングアニメーションを実行する関数
    function typeWriter(element, text, index) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index); // テキストを1文字ずつ追加
            index++;
            setTimeout(function () {
                typeWriter(element, text, index); // 次の文字を処理するまで待機
            }, 30);
        }
    }

});