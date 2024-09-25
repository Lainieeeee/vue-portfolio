// $(document).ready(function() {

//     var userAgent = navigator.userAgent;

//     if (!/(iPhone|iPod|iPad|Android|Mobile|Tablet)/i.test(userAgent)) {
//         // PCの場合
//         $("body").html("<p>これはPC</p>");
//     } else {
//         // PC以外の場合
//         $("body").html("<p>これはPCではありません</p>");
//     }

// });


$(document).ready(function() {

    // windowのロード時とリサイズ時の両方で実行する関数
    function updateContent() {
        var userAgent = navigator.userAgent;

        if (!/(iPhone|iPod|iPad|Android|Mobile|Tablet)/i.test(userAgent)) {
            // PCの場合
            $("body").html("<p>これはPCです</p>");
        } else {
            // PC以外の場合
            $("body").html("<p>これはPCではありません</p>");
        }
    }

    // windowのロード時に実行
    updateContent();

    // windowのリサイズ時に実行
    $(window).resize(function() {
        updateContent();
    });

});