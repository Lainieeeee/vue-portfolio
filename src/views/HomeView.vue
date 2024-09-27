<template>
  <div>

    <HeaderComponent />

    <BannerComponent />

    <!-- indexAboutBox -->
    <div class="indexAboutBox container detailInner" id="about">

      <!-- titleBox -->
      <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
          <p class="fs-3">關於我</p>
          <h2 class="display-2 fw-bold">ABOUT</h2>
      </div>

      <div class="d-xl-flex justify-content-xl-between align-items-start">
          <!-- profileImg -->
          <div class="profileImg col-9 col-xl-3 mx-auto mb-5 mb-xl-0 inview fadeinLeft">
              <img src="../assets/images/index/img02.webp" alt="profile" loading="lazy">
          </div>
          <!-- textBox -->
          <div class="textBox col-xl-8">
              <div class="d-flex justify-content-start align-items-end mb-5 inview fadeinUp">
                  <p class="display-1">莊 又霖</p>
                  <p class="ps-3 display-4">CHUANG YU LIN</p>
              </div>
              <p class="mb-4 lh-lg inview fadeinUp">
                  您好、我是莊又霖。<br>
                  我出生於台灣高雄，小時候就搬到日本生活。畢業於東京工科大學設計部設計科，總共有6年的前端工程師實務經驗。
              </p>
              <p class="mb-4 lh-lg inview fadeinUp">
                  在日本的網頁製作公司工作了4年半，主要任職於大型購物中心（AEON）的新事業部門和生命保險公司（Zurich）的數位業務部門，專注設計和開發重視使用者體驗的網站。
              </p>
              <p class="mb-4 lh-lg inview fadeinUp">
                  返回台灣後，我先在高雄師範大學的語言學校學習中文，完成3個月的課程後，在台灣當地網頁製作公司參與購物網站、形象官網等的多個專案，負責前端開發約1年半。
                  這些經驗讓我更深入了解跨文化環境中使用者的需求，並不斷提升相關的技能。
              </p>
              <p class="lh-lg inview fadeinUp">
                    我的目標是追求設計與技術的融合，努力開發既吸引人又易於使用的網站及應用程式。<br>
                    同時，持續提升前端開發的技術水平，尋找更具挑戰性的專案，以實現更大的成就。
              </p>
              <dl class="mt-5 inview fadeinUp">
                  <dt class="fs-2 mb-2">
                      <i class="fa-regular fa-comments pe-2"></i>
                      言語 Language
                  </dt>
                  <dd class="fs-3">
                      日文、台灣閩南語、中文（HSK5級）
                  </dd>
              </dl>
          </div>
      </div>

    </div>

    <!-- indexExperienceBox -->
    <div class="indexExperienceBox bg-ivory" id="experience">
      <div class="container detailInner row m-auto justify-content-lg-between">

          <div class="col-xl-5 col-xxl-3 text-center pe-0 pe-lg-5 mb-5 mb-xl-0 inview fadeinLeft">
              <!-- titleBox -->
              <div class="titleBox mb-5 fw-bold text-orange">
                  <p class="fs-3">工作經歷</p>
                  <h2 class="display-2 fw-bold">EXPERIENCE</h2>
              </div>
              <div class="col-10 col-xl-12 m-auto">
                  <picture>
                      <!-- tablet 〜1200px -->
                      <source srcset="../assets/images/index/img01-sp.webp" media="(max-width: 1200px)" loading="lazy">
                      <!-- desktop 1200px〜 -->
                      <img src="../assets/images/index/img01-pc.webp" alt="Experience image" loading="lazy">
                  </picture>
              </div>
          </div>

          <div class="col-xl-7 col-xxl-8">
              <dl class="px-4 inview fadeinUp">
                  <dt>2023/4~</dt>
                  <dd class="mt-2 mb-0">
                      <p class="fs-2">前端工程師</p>
                      <p class="fs-2">瓦吉科技股份有限公司</p>
                      <p class="my-3">
                          作為前端工程師與後端工程師合作，共同參與新網站的開發。<br>
                          專注於多元化專案，包括購物網站、形象官網等，從零開始進行全程網站運營、頁面設計優化及功能開發。<br>
                          積極管理網站運作，並透過GA/GTM進行深入的頁面分析，以及實施有效的SEO優化策略。
                      </p>
                      <ul class="d-flex justyfy-content-start align-items-center flex-wrap">
                          <li class="text-orange fs-4 me-4">#HTML5</li>
                          <li class="text-orange fs-4 me-4">#CSS(SASS)</li>
                          <li class="text-orange fs-4 me-4">#JavaScript/jQuery</li>
                          <li class="text-orange fs-4 me-4">#Bootstrap5</li>
                          <li class="text-orange fs-4 me-4">#Node.js</li>
                          <li class="text-orange fs-4 me-4">#Git/GitHub</li>
                          <li class="text-orange fs-4 me-4">#VMware</li>
                          <li class="text-orange fs-4 me-4">#Ubuntu(Linux OS)</li>
                          <li class="text-orange fs-4 me-4">#Laravel</li>
                          <li class="text-orange fs-4 me-4">#PHP</li>
                          <li class="text-orange fs-4 me-4">#Docker</li>
                          <li class="text-orange fs-4 me-4">#Vite</li>
                          <li class="text-orange fs-4 me-4">#GA/GTM</li>
                          <li class="text-orange fs-4 me-4">#Figma</li>
                          <li class="text-orange fs-4 me-4">#Visual Studio Code</li>
                      </ul>
                  </dd>
              </dl>
              <dl class="mt-4 pt-4 px-4 inview fadeinUp">
                  <dt>2022/11~2023/2</dt>
                  <dd class="mt-2 mb-0">
                      <p>國立高雄師範大學 語言學校學中文</p>
                  </dd>
              </dl>
              <dl class="mt-4 pt-4 px-4 inview fadeinUp">
                  <dt>2018/4~2022/10</dt>
                  <dd class="mt-2 mb-0">
                      <p class="fs-2">前端工程師 / 網頁設計師</p>
                      <p class="fs-2">株式会社あとらす二十一</p>
                      <p class="my-3">
                          駐點於大型購物中心（AEON）的新事業部門和生命保險公司（Zurich）的業務數位部門，參與客戶專案的前端開發。<br>
                          從網站設計到建置，並製作宣傳工具如傳單、海報和橫幅等。<br>
                          透過使用多種不同的CMS應對各種專案，獲得了靈活的應對能力和廣泛的知識。
                      </p>
                      <ul class="d-flex justyfy-content-start align-items-center flex-wrap">
                          <li class="text-orange fs-4 me-4">#Illustartor</li>
                          <li class="text-orange fs-4 me-4">#Photoshop</li>
                          <li class="text-orange fs-4 me-4">#Dreamweaver</li>
                          <li class="text-orange fs-4 me-4">#HTML5</li>
                          <li class="text-orange fs-4 me-4">#CSS(SASS)</li>
                          <li class="text-orange fs-4 me-4">#JavaScript/jQuery</li>
                          <li class="text-orange fs-4 me-4">#PHP7</li>
                          <li class="text-orange fs-4 me-4">#WordPress</li>
                          <li class="text-orange fs-4 me-4">#sitecore</li>
                          <li class="text-orange fs-4 me-4">#aishipR</li>
                          <li class="text-orange fs-4 me-4">#楽天RMS</li>
                          <li class="text-orange fs-4 me-4">#ec-CONICER</li>
                          <li class="text-orange fs-4 me-4">#aeon original CMS</li>
                          <li class="text-orange fs-4 me-4">#Visual Studio Code</li>
                          <li class="text-orange fs-4 me-4">#XAMPP</li>
                          <li class="text-orange fs-4 me-4">#FFFTP</li>
                          <li class="text-orange fs-4 me-4">#FileZilla</li>
                      </ul>
                  </dd>
              </dl>
              <dl class="mt-4 pt-4 px-4 inview fadeinUp">
                  <dt>2014/4~2018/3</dt>
                  <dd class="mt-2 mb-0">
                      <p>東京工科大学 設計部設計科</p>
                  </dd>
              </dl>
          </div>

      </div>
    </div>

    <!-- indexProductsBox -->
    <div class="indexProductsBox container detailInner">

        <!-- titleBox -->
        <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
            <p class="fs-3">製作案例</p>
            <h2 class="display-2 fw-bold">PROJECTS</h2>
        </div>

        <div class="inview">
            <TopProductComponent />
        </div>

        <!-- 今回は使わない -->
        <!-- <SliderComponent /> -->
        <!-- <FancyBoxComponent /> -->

        <div class="text-center mt-5 inview fadeinUp">
            <router-link to="/projects" class="moreButtonV2">
                <span class="fs-2">瀏覽更多</span>
                <i class="fa-solid fa-arrow-right ms-3 arrowIcon"></i>
            </router-link>
        </div>

    </div>

    <!-- indexExpertiseBox -->
    <div class="indexExpertiseBox bg-ivory overflow-hidden" id="expertise">
      <div class="container detailInner">

        <!-- titleBox -->
        <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
              <p class="fs-3">專業知識</p>
              <h2 class="display-2 fw-bold">EXPERTISE</h2>
        </div>

        <div class="ExpertiseList row justify-content-start m-auto">
            <div class="ExpertiseItem bg-white p-5 border border-2 border-black rounded-3 inview">
                <dl class="">
                    <dt class="fs-2 mb-3 text-center">
                        <i class="fa-brands fa-js fs-1"></i><br>
                        JavaScript
                    </dt>
                    <dd class="d-inline-block text-start">
                        <p class="mb-2">使用jQuery實現互動效果的經驗</p>
                        <p>使用Vite進行快速高效率的網站開發</p>


                        <p>使用 Vue CLI 建立和管理專案</p>
                        <p>使用 Vue Router 實現SPA（單頁式應用）</p>
                        <p>創建考慮可重用性的 Vue 元件</p>
                        <p>使用 Vue Composition API 設計與開發現代網站</p>
                    </dd>
                </dl>
            </div>
            <div class="ExpertiseItem bg-white p-5 border border-2 border-black rounded-3 inview">
                <dl class="">
                    <dt class="fs-2 mb-3 text-center">
                        <i class="fa-solid fa-code fs-1"></i><br>
                        Web Layout
                    </dt>
                    <dd class="d-inline-block text-start">
                        <p class="mb-2">HTML5、CSS3(SCSS)及Bootstrap5進行響應式設計的豐富經驗</p>
                        <p class="mb-2">實現CSS動畫和過渡效果的經驗</p>
                        <p>頁面速度優化，提升使用者體驗</p>
                    </dd>
                </dl>
            </div>
            <div class="ExpertiseItem bg-white p-5 border border-2 border-black rounded-3 inview">
                <dl class="">
                    <dt class="fs-2 mb-3 text-center">
                        <i class="fa-solid fa-palette fs-1"></i><br>
                        Adobe / Figma
                    </dt>
                    <dd class="d-inline-block text-start">
                        <p class="mb-2">使用Illustrator製作設計促銷工具的經驗</p>
                        <p class="mb-2">使用Photoshop的Web廣告以及網站設計的經驗</p>
                        <p>依據Figma設計進行精確編碼，準確反映設計意圖</p>
                    </dd>
                </dl>
            </div>
            <div class="ExpertiseItem bg-white p-5 border border-2 border-black rounded-3 inview">
                <dl class="">
                    <dt class="fs-2 mb-3 text-center">
                        <i class="fa-solid fa-circle-plus fs-1"></i><br>
                        其他
                    </dt>
                    <dd class="d-inline-block text-start">
                        <p class="mb-2">使用Git / Github進行版本管理及與多位工程師的協同作業經驗</p>
                        <p class="mb-2">使用GA/GTM分析按鈕點擊率和捲動位置並生成報告</p>
                        <p class="mb-2">使用YouTrack進行管理整個團隊的任務進度</p>
                        <p>使用Ubuntu(LinuxOS)進行前端開發及terminal操作</p>
                    </dd>
                </dl>
            </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import TopProductComponent from '@/components/TopProductComponent.vue';
// import SliderComponent from '@/components/SliderComponent.vue'
// import FancyBoxComponent from '@/components/FancyBoxComponent.vue';



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