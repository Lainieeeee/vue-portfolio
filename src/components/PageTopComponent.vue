<template>
    
    <!-- pagetopBtn -->
    <div class="pagetopBtn">
        <router-link to="#pagetop">
            <img src="../assets/images/common/pagetop.webp" alt="pagetop" width="74" height="74">
        </router-link>
    </div>

</template>
  
<script setup>
import { onMounted } from 'vue';
import $ from 'jquery'; // jQueryをインポート

onMounted(() => {
    // pagetopBtn淡入顯示
    $(window).scroll(function() {
        var windowWidth = $(window).width();
        var scrollPosition = $(window).scrollTop();

        if (windowWidth <= 767.89 && scrollPosition > 640) {
            $('.pagetopBtn').fadeIn(); // width:767.89px以下時,高度超過640px，則淡入顯示
        } else if (windowWidth >= 768 && scrollPosition > 1280) {
            $('.pagetopBtn').fadeIn(); // width:768px以上時,高度超過1280px，則淡入顯示
        } else {
            $('.pagetopBtn').fadeOut(); // 否則淡出隐藏
        }
    });
});
</script>

<style scoped>
    .pagetopBtn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        z-index: 2;
    }
    .pagetopBtn a img{
        width: 50px;
    }


/*====================================================
767.98px以下
====================================================*/
@media screen and (max-width: 767.98px){
    .pagetopBtn a img{
        width: 40px;
    }
}
</style>
