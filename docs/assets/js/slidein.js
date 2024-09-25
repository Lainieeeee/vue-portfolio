$(document).ready(function(){
    $(window).scroll(setScrollInit);
    $(window).resize(setScrollInit);
    setScrollInit();
});

function setScrollInit(){
var sT = $(window).scrollTop();
var wH = $(window).height();
var bH = $("html").height();

$(".slideinLeft,.slideinRight,.slideinBottom,.slideinTop").each(function(){
    var cT = $(this).offset().top;
    $(this).toggleClass('is-show', sT > cT - wH * 0.8 || sT >= bH - wH * 0.8);
});
}