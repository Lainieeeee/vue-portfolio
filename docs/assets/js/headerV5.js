// hoverとする場合
$(window).on('load resize',function() {
    let window_wid = $(window).width();
    let lg = 991.98;
    if (window_wid >= md) {
        //lg以上
        $(".dropdown-toggle,.dropdown-menu").removeClass("show");
        document.addEventListener("DOMContentLoaded", function() {
            var dropdownElements = document.querySelectorAll('.nav-item.dropdown, .dropdown-menu .dropdown-item.dropdown-toggle');

            dropdownElements.forEach(function(element) {
                // ホバー時にドロップダウンを表示
                element.addEventListener('mouseenter', function() {
                    var dropdownMenu = element.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.classList.add('show');
                    }
                });

                // ホバーが外れた時にドロップダウンを非表示
                element.addEventListener('mouseleave', function() {
                    var dropdownMenu = element.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.classList.remove('show');
                    }
                });
            });
        });
    }else{
        //lg未満
        
    }
})