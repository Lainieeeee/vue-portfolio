$(function () {

    // ページ読み込み時は1つ目open
    $('.accordionContainer .accordionItem:first-child').addClass("open");
    $('.accordionContainer .accordionItem:first-child').children('.accordionContent').slideToggle(300);

    // アコーディオン指定　1つ開けたら他閉じる
    $(".accordionContainer.V2 .accordionTitle").on("click", function () {
        $(".accordionContainer.V2 .accordionTitle").not(this).parent().removeClass("open");
        $(".accordionContainer.V2 .accordionTitle").not(this).next().slideUp(300);
        $(this).parent().toggleClass("open");
        $(this).next().slideToggle(300);
    });

    // アコーディオン指定　通常
    $(".accordionContainer.V1 .accordionTitle").on("click", function () {
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass("open", 300);
    });

});