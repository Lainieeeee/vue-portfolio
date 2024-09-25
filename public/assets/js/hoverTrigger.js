$(function () {
    $(".hoverTrigger").hover(function () {
        var target = $(this).data("target");
        $(".changeList div").hide();
        $(target).show();
    });
});