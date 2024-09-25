<template>
    <HeaderComponent />

    <div class="container detailInner">

      <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
          <p class="fs-3">作品集列表</p>
          <h2 class="display-2 fw-bold">PRODUCTS</h2>
      </div>
      <p class="inview fadeinUp text-center">
          這是我作為前端工程師迄今為止的作品。<br>
          包含購物網站、形象官網、企業網站、一頁式網站等各種專案。
      </p>

      <ProductsComponent />



    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProductsComponent from '@/components/ProductsComponent.vue';



// 表示領域に入ったらフェード表示させる
import { onMounted } from 'vue';
onMounted(() => {
  const options = {
    root: null, // ビューポート
    rootMargin: '0px',
    threshold: 0.2 // 20%が見えたらコールバックを実行
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const index = Array.from(target.parentNode.children).indexOf(target); // 親の子要素のインデックスを取得
        target.classList.add('is-show');
        target.style.transitionDelay = `${index * 0.1}s`; // インデックスを基に遅延を設定
        observer.unobserve(target); // 1回だけ実行するために解除
      }
    });
  }, options);
  const elements = document.querySelectorAll('.inview');
  elements.forEach(el => {
    observer.observe(el); // 各要素を監視
  });
});
</script>

<style>
    .inview {
        opacity: 0;
        transform: translateY(20px);
    }
    .inview.is-show {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1.0s ease, transform 1.0s ease;
    }
</style>