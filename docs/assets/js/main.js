// inview
$(function () {

    // Fade in only once
   $(".inview").on("inview", function () {
       $(this).addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
   });

   // Repeatedly fade in
   $(".inviewRe").on("inview", function (event, isInView) {
       if (isInView) {
       $(this).stop().addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
       } else {
       $(this).stop().removeClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
       }
   });

});

// smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 200;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

//form don't zoom
var ua = navigator.userAgent.toLowerCase();
var isiOS = (ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1);
if(isiOS) {
  var viewport = document.querySelector('meta[name="viewport"]');
  if(viewport) {
    var viewportContent = viewport.getAttribute('content');
    viewport.setAttribute('content', viewportContent + ', user-scalable=no');
  }
}

// hamburgerMenu
$(function(){
  $(".hamburgerMenu").click(function () {
    $(this).toggleClass('active');
  });
});

// pagetopBtn
$(function() {

  $(window).scroll(function() {

      var windowWidth = $(window).width();
      var scrollPosition = $(window).scrollTop();

      if (windowWidth <= 767.89 && scrollPosition > 640) {
          $('.pagetopBtn').fadeIn();
      } else if (windowWidth >= 768 && scrollPosition > 1280) {
          $('.pagetopBtn').fadeIn();
      } else {
          $('.pagetopBtn').fadeOut();
      }
  });

});