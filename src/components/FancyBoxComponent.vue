<template>
    <div v-for="product in filteredProducts" :key="product.id" class="projectItem">
        <!-- projectName -->
        <p class="projectName fs-2 fw-bold text-orange mb-2 firstLine">{{ product.name }}</p>
        <!-- fancyBox -->
        <div class="fancyBox imageZoomHorizontal">
        <!-- 代表画像 -->
        <a
            v-if="product.images.length > 0"
            :href="require(`@/assets/images/products/${product.images[0]}`)"
            :data-fancybox="`gallery-${product.id}`"
            class="fancyBoxItem"
        >
            <div class="img">
            <img :src="require(`@/assets/images/products/${product.images[0]}`)" :alt="product.name" />
            </div>
        </a>

        <!-- 非表示の画像 -->
        <div style="display: none;">
            <a
            v-for="(image, index) in product.images.slice(1)"
            :key="index"
            :href="require(`@/assets/images/products/${image}`)"
            :data-fancybox="`gallery-${product.id}`"
            >
            <img :src="require(`@/assets/images/products/${image}`)" :alt="product.name" />
            </a>
        </div>
        </div>
        <!-- projectCategories -->
        <ul class="projectCategories mt-3">
        <li class="category" v-for="(category, index) in product.categories" :key="index">{{ category }}</li>
        </ul>
        <!-- projectUrl -->
        <p class="projectUrl mt-3 text-end" v-if="product.url">
            <a :href="product.url" target="_blank" tabindex="0" class="text-decoration-none text-dark">
                連結網址 <i class="fa-solid fa-arrow-up-right-from-square ps-2"></i>
            </a>
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Fancybox } from '@fancyapps/ui'; // Fancyboxのインポート

const products = ref([]); // 初期化

const specificIds = [1, 2]; // 表示させたいIDの配列

const filteredProducts = computed(() => {
  return products.value
    .filter(product => specificIds.includes(product.id))
    .sort((a, b) => specificIds.indexOf(a.id) - specificIds.indexOf(b.id));
});

onMounted(async () => {
  const response = await fetch('/data/projects.json'); // JSONファイルを取得
  const data = await response.json(); // JSONをパース
  products.value = data; // データを設定
  Fancybox.bind('[data-fancybox]'); // Fancyboxを初期化
});
</script>
  
<style>
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
</style>
