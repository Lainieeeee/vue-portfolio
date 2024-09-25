// 全てのギャラリーを処理
document.querySelectorAll('.fancyBox').forEach(function (gallery) {
    // ギャラリーごとに要素を取得し、fancyboxをバインド
    Fancybox.bind(`#${gallery.id} [data-fancybox="${gallery.id}"]`, {});
});