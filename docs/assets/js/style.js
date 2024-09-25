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

// snsButton
$(function(){
  $('.snsShare .menu').click(function() {
      $(this).parent().toggleClass('open');
  });
});

// smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 100;
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

// pagetopBtn淡入顯示
$(function() {

  $(window).scroll(function() {

      var windowWidth = $(window).width();
      var scrollPosition = $(window).scrollTop();

      if (windowWidth <= 767.89 && scrollPosition > 640) {
          $('.pagetopBtn').fadeIn(); // width:767.89px以下時,高度超過600px，則淡入顯示
      } else if (windowWidth >= 768 && scrollPosition > 1280) {
          $('.pagetopBtn').fadeIn(); // width:768px以上時,高度超過1280px，則淡入顯示
      } else {
          $('.pagetopBtn').fadeOut(); // 否則淡出隐藏
      }
  });

});

// GoogleMapを遅延読み込みさせる（表示速度最適化のため）
function asyncGoogleMap() {
  $('.lazyloadMap').each(function () {
      var map = $(this).data('map');
      $(this).after(map);
  });
}
setTimeout(function() {
  asyncGoogleMap();
}, 1000);


// hamburgerMenu
$(function(){
  $(".hamburgerMenu").click(function () {
    $(this).toggleClass('active');
  });
});
