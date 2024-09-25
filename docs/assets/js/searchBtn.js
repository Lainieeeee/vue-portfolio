$(function(){
    $(".searchBtn").on("click", function() {
        $(this).prev(".searchText").toggleClass("open");
        $(this).toggleClass("open");
    });
});