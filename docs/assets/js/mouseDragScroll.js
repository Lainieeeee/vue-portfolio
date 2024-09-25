// マウスのドラッグで横スクロールさせる
$.prototype.draggable = function() {
    var t;
    $(this).each(function(i,e) {
      $(e).mousedown(function(e2) {
        e2.preventDefault();
        t = $(e);
        $(e).data({
          down: true,
          x: e2.clientX,
          y: e2.clientY,
          left: $(e).scrollLeft(),
          top: $(e).scrollTop()
        });
      });
    });
    $(document).mousemove(function(e) {
      if($(t).data("down")) {
        e.preventDefault();
        $(t).scrollLeft($(t).data("x")+$(t).data("left")-e.clientX);
        $(t).scrollTop($(t).data("y")+$(t).data("top")-e.clientY);
      }
    }).mouseup(function(e) {
      $(t).data("down", false);
    });
  };
  $(".mouseDragScroll").draggable();



  // scrollArrow
$(document).ready(function() {

  // leftボタンをクリックしたら左に100px移動
  $('.scrollArrow.left').click(function () {
      $('.mouseDragScroll').animate({
          scrollLeft: $('.mouseDragScroll').scrollLeft() - 100
      }, 300);
  });

  // rightボタンをクリックしたら右に100px移動
  $('.scrollArrow.right').click(function () {
      $('.mouseDragScroll').animate({
          scrollLeft: $('.mouseDragScroll').scrollLeft() + 100
      }, 300);
  });

});