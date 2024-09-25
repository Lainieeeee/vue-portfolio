<template>
    <div>

        <div class="my-5">
            <p class="text-center mb-5 inview fadeinUp">\ 可以選擇分類哦～ /</p>
            <!-- categoryFilters -->
            <ul class="categoryFilters mb-5 inview">
                <li @click="showAll" :class="{ active: selectedCategory === null }">All</li>
                <li v-for="(category, index) in uniqueCategories" :key="index" 
                    @click="filterByCategory(category)" 
                    :class="{ active: selectedCategory === category }">
                    {{ category }}
                </li>
            </ul>
        </div>

        <div class="row m-auto pt-5">
            <div v-for="product in paginatedProducts" :key="product.id" class="projectItem col-sm-6 col-lg-4 col-xl-3 px-3 mb-5">
                <!-- projectName -->
                <p class="projectName fs-2 fw-bold text-orange mb-2 firstLine">{{ product.name }}</p>
                <!-- fancyBox -->
                <div class="fancyBox imageZoomHorizontal">
                    <!-- 代表画像 -->
                    <a v-if="product.images.length > 0"
                       :href="require(`@/assets/images/products/${product.images[0]}`)"
                       :data-fancybox="`gallery-${product.id}`"
                       class="fancyBoxItem">
                        <div class="img">
                            <img :src="require(`@/assets/images/products/${product.images[0]}`)" :alt="product.name" />
                        </div>
                    </a>

                    <!-- 非表示の画像 -->
                    <div style="display: none;">
                        <a v-for="(image, index) in product.images.slice(1)" :key="index"
                           :href="require(`@/assets/images/products/${image}`)"
                           :data-fancybox="`gallery-${product.id}`">
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
        </div>

        <!-- paginationBox -->
        <div class="paginationBox mt-5 inview">
            <span @click="prevPage" :disabled="currentPage === 1" class="pageItem border border-1 border-dark rounded-circle lh-1 me-5">
                <i class="fa-solid fa-angle-left"></i>
            </span>
            <span class="fw-bold pe-2 fs-1 pb-1">{{ currentPage }}</span>
            /
            <span class="ps-2">{{ totalPages }}</span>
            <span @click="nextPage" :disabled="currentPage === totalPages" class="pageItem border border-1 border-dark rounded-circle lh-1 ms-5">
                <i class="fa-solid fa-angle-right"></i>
            </span>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Fancybox } from '@fancyapps/ui'; // Fancyboxのインポート

const products = ref([]); // 初期化
const selectedCategory = ref(null); // 選択中のカテゴリ
const currentPage = ref(1); // 現在のページ
const itemsPerPage = 8; // 1ページに表示するアイテム数

const filteredProducts = computed(() => {
    if (selectedCategory.value === null) {
        return products.value; // すべてのプロダクトを表示
    }
    return products.value.filter(product => 
        product.categories.includes(selectedCategory.value)
    );
});

// ページネーション用のcomputedプロパティ
const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.value.slice(start, end); // 現在のページに表示するアイテムを返す
});

const uniqueCategories = computed(() => {
    const allCategories = products.value.flatMap(product => product.categories);
    return [...new Set(allCategories)];
});

const filterByCategory = (category) => {
    selectedCategory.value = category; // 選択したカテゴリを設定
    currentPage.value = 1; // フィルタリング後は1ページ目に戻す
};

const showAll = () => {
    selectedCategory.value = null; // すべてのアイテムを表示
    currentPage.value = 1; // フィルタリング後は1ページ目に戻す
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

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
    .categoryFilters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .categoryFilters li {
        cursor: pointer;
        margin: 0.4rem;
        padding: 8px 15px;
        border: 1px solid #212529;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    .categoryFilters li.active {
        background-color: #DB5331;
        color: #EDEBDA;
    }



    .paginationBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .paginationBox .pageItem {
        cursor: pointer;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .paginationBox .pageItem[disabled="true"]{
        pointer-events: none;
        opacity: 0.3;
    }
</style>
