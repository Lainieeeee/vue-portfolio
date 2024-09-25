// 要素の高さを揃える
$(document).ready(function(){
    $(window).on('resize', function(){
        $('.fixHeight').matchHeight();
    }).trigger('resize');
  });