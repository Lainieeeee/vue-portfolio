<template>
  <div class="slider slickCenter02" ref="sliderRef">
    <div v-for="item in slides" :key="item.id" class="slide projectItem">
      <!-- projectName -->
      <p class="projectName fs-2 fw-bold text-orange mb-2 firstLine">{{ item.name }}</p>
      <!-- fancyBox -->
      <div class="fancyBox imageZoomHorizontal">
        <!-- 代表画像 -->
        <a
          v-if="item.images.length > 0"
          :href="require(`@/assets/images/products/${item.images[0]}`)"
          :data-fancybox="`gallery-${item.id}`"
          class="fancyBoxItem"
        >
          <div class="img">
            <img :src="require(`@/assets/images/products/${item.images[0]}`)" :alt="item.name" />
          </div>
        </a>

        <!-- 非表示の画像 -->
        <div style="display: none;">
          <a
            v-for="(image, index) in item.images.slice(1)"
            :key="index"
            :href="require(`@/assets/images/products/${image}`)"
            :data-fancybox="`gallery-${item.id}`"
          >
            <img :src="require(`@/assets/images/products/${image}`)" :alt="item.name" />
          </a>
        </div>
      </div>
      <!-- projectCategories -->
      <ul class="projectCategories mt-3">
        <li class="category" v-for="(category, index) in item.categories" :key="index">{{ category }}</li>
      </ul>
      <!-- projectUrl -->
      <p class="projectUrl mt-3 text-end" v-if="item.url">
        <a :href="item.url" target="_blank" tabindex="0" class="text-decoration-none text-dark">
          連結網址 <i class="fa-solid fa-arrow-up-right-from-square ps-2"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

export default {
name: 'SliderComponent',
setup() {
  const sliderRef = ref(null);
  const slides = ref([]);

  // 特定のIDリスト
  const specificIds = [1, 2, 3, 4]; // 表示したいIDを指定

  // JSONファイルからデータを取得
  const fetchProjectsData = async () => {
    try {
      const response = await fetch('/data/projects.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // 特定のIDでフィルタリング
      slides.value = data.filter(item => specificIds.includes(item.id));
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  onMounted(async () => {
    await fetchProjectsData();
    if (sliderRef.value) {
      $(sliderRef.value).slick({
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 4000,
        dots: false,
        infinite: false,
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
    }

    // Fancyboxの初期化
    Fancybox.bind('[data-fancybox]', {});
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
  .slickCenter02 .arrowBtn[aria-disabled="true"]{
    opacity: 0.3;
    pointer-events: none;
  }


  .fancybox__container {
      z-index: 999999!important;
  }
  .projectItem .projectCategories {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
  }
  .projectItem .projectCategories .category{
      background-color: #EDEBDA;
      line-height: 1;
      padding: 4px 8px 4px 20px;
      border-radius: 0.3em;
      margin: 0.2rem;
      position: relative;
      font-size: 1.4rem;
  }
  .projectItem .projectCategories .category:before {
      content: "#";
      position: absolute;
      left: 8px;
      top: 5px;
  }

  .projectItem .fancyBox.imageZoomHorizontal .img {
      border: 1px solid #DB5331;
      position: relative;
  }
  .projectItem .fancyBox.imageZoomHorizontal .img img {
  -o-object-position: top;
  object-position: top;
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