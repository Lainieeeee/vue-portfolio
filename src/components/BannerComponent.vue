<template>
    <div class="GeometricBg overflow-hidden bg-ivory">
        <div id="particles-container" class="aa"></div>
        <div class="GeometricBgInner container detailInner row m-auto align-items-center inview fadeinUp">
            <div class="col-10 col-lg-5 col-xl-6 m-auto">
                <img src="../assets/images/index/banner01.webp" alt="mockup image">
            </div>
            <div class="col-lg-7 col-xl-6 text-center text-md-end mt-5 mt-md-0">
                <h1 class="text-orange fw-bold mb-2">Welcome!<br>This is YU-LIN's portfolio.</h1>
                <p class="text-orange fs-2 fw-bold mb-5">
                    ポートフォリオを閲覧していただき、ありがとうございます。<br>
                    感謝您瀏覽我的作品集。
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import 'particles.js';

const particlesConfig = {
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: '#DB5331',
    },
    shape: {
      type: 'circle', // より一般的な形状に変更
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      color: '#DB5331',
      distance: 150,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};


onMounted(() => {
  if (document.getElementById('particles-container')) {
    window.particlesJS('particles-container', particlesConfig);
  }
});

onUnmounted(() => {
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
});
</script>

<style scoped>
    .GeometricBg {
        position: relative;
        z-index: 0;
    }
    .GeometricBg:after {
        content: "";
        position: absolute;
        display: inline-block;
        background: linear-gradient(0deg, #FBFBF6 20%, rgba(237, 235, 218, 0) 100%);
        width: 100%;
        height: 30%;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    .aa{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
    }

    .GeometricBgInner h1{
        font-size: 4.8rem;
    }
    @media screen and (max-width: 1199.98px) {
        .GeometricBgInner h1{
            font-size: 4rem;
        }
    }
    @media screen and (max-width: 767.98px) {
        .GeometricBgInner h1{
            font-size: calc(1.2rem + 3.2vw);
        }
    }
</style>
