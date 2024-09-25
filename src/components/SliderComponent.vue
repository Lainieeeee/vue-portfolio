<template>
  <div class="slider slickCenter02" ref="sliderRef">
    <div v-for="(item, index) in slides" :key="index" class="slide">
      <img :src="item.image" :alt="item.alt" />
    </div>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import $ from 'jquery';
  import 'slick-carousel';
  
  export default {
    name: 'SliderComponent',
    setup() {
      const sliderRef = ref(null);
      const slides = ref([
        { image: 'http://localhost:8080/img/img01-sp.61c04e2a.webp', alt: 'Image 1' },
        { image: 'http://localhost:8080/img/img01-sp.61c04e2a.webp', alt: 'Image 2' },
        { image: 'path/to/image3.jpg', alt: 'Image 3' },
        { image: 'path/to/image3.jpg', alt: 'Image 3' },
      ]);
  
      onMounted(() => {
        $(sliderRef.value).slick({
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 4000,
          dots: false,
          prevArrow: '<span class="arrowBtn prev"><i class="fa-solid fa-chevron-left fs-1 text-orange"></i></span>',
          nextArrow: '<span class="arrowBtn next"><i class="fa-solid fa-chevron-right fs-1 text-orange"></i></span>',
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
  
      return {
        sliderRef,
        slides,
      };
    },
  };
</script>

<style>
  .slickCenter02{
    position: relative;
    z-index: 0;
    padding: 0 20px;
  }
  .slickCenter02 .slick-slide{
    padding: 0 10px;
  }
  .slickCenter02 .arrowBtn{
    position: absolute;
    top: calc(50% - 3rem);
    z-index: 1;
    cursor: pointer;
  }
  .slickCenter02 .arrowBtn.prev{
    left: 0;
  }
  .slickCenter02 .arrowBtn.next{
    right: 0;
  }

  /*====================================================
  767.98px以下
  ====================================================*/
  @media screen and (max-width: 767.98px){
      .slickCenter02{
        padding: 0 10px;
      }
      .slickCenter02 .slick-slide{
        padding: 0 10px;
      }
  }
</style>
