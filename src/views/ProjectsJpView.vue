<template>
  <div class="jp">

    <HeaderJpComponent />

    <div class="container detailInner">

      <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
          <p class="fs-3">過去の制作実績一覧</p>
          <h2 class="display-2 fw-bold">PRODUCTS</h2>
      </div>
      <p class="inview fadeinUp text-center">
        これまでのフロントエンドエンジニアとして制作した成果物です。<br>
        ECサイト・ブランディングサイト・コーポレートサイト・ランディングページなどを含む、多岐にわたるプロジェクトを紹介します。
      </p>

      <ProductsJpComponent />

    </div>

  </div>
</template>

<script setup>
import HeaderJpComponent from '@/components/HeaderJpComponent.vue'
import ProductsJpComponent from '@/components/ProductsJpComponent.vue';



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