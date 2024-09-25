import $ from 'jquery';

$(function(){

  // hamburgerMenu
  $(".hamburgerMenu").click(function () {
    $(this).toggleClass('active');
  });

});