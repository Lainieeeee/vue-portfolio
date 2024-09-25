$(".mainvisualOnScroll.slick ul")
    .on("init", function () {
        // スライダーが初期化されたときに slickAnimation クラスを最初のスライドに追加
        $('.slick-slide[data-slick-index="0"]').addClass("slickAnimation");
    })
    .slick({
        autoplay: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
    })
    .on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(nextSlide).addClass("slickAnimation");
            $(".slick-slide", this).eq(currentSlide).addClass("stopAnimation");
        },
        afterChange: function (event, slick, currentSlide) {
            $(".stopAnimation", this).removeClass("stopAnimation slickAnimation");
            // 最後のスライドに到達した場合は、最初のスライドにslickAnimationクラスを追加
            if (currentSlide === slick.$slides.length - 1) {
                $('.slick-slide[data-slick-index="0"]').addClass("slickAnimation");
            }
        },
    });
