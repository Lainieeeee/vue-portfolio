<template>
  <div class="jp">

    <HeaderJpComponent />

    <BannerComponent />

    <!-- indexAboutBox -->
    <div class="indexAboutBox container detailInner" id="about">

      <!-- titleBox -->
      <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
          <p class="fs-3">私について</p>
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
                    はじめまして、莊と申します。<br>
                    台湾高雄市で生まれ、幼少期に日本に移住し、東京工科大学のデザイン学部デザイン学科を卒業後、フロントエンジニアとして計6年の実務経験を積んできました。
                </p>
                <p class="mb-4 lh-lg inview fadeinUp">
                    日本ではWeb制作会社にて4年半、商業施設（AEON）の新規事業部や生命保険会社（Zurich）の営業デジタル部に常駐し、ユーザー体験を重視したWebサイトの設計と開発に従事しました。
                </p>
                <p class="mb-4 lh-lg inview fadeinUp">
                    台湾に帰国後は、高雄師範大学の語学学校で中国語を学び、台湾現地のWeb制作会社でショッピングサイトやコーポレートサイト、
                    ブランディングサイトなど複数のプロジェクトを約1年半手掛けました。
                    これらの経験を通じて、異文化におけるユーザーのニーズを理解し、対応するスキルを磨きました。
                </p>
                <p class="lh-lg inview fadeinUp">
                    私の目標は、デザインと技術の調和を追求し、魅力的で使いやすいウェブサイトやアプリケーションの開発に取り組むことです。
                    フロントエンド技術を常に向上させ、革新的なプロジェクトに取り組み、さらなる成長を目指しています。
                </p>
                <dl class="mt-5 inview fadeinUp">
                    <dt class="fs-2 mb-2">
                        <i class="fa-regular fa-comments pe-2"></i>
                        言語 Language
                    </dt>
                    <dd class="fs-3">
                        日本語、台湾閩南語、中国標準語（HSK5級）
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
                    <p class="fs-3">職務経歴</p>
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
                        <p class="fs-2">フロントエンジニア</p>
                        <p class="fs-2">瓦吉科技股份有限公司</p>
                        <p class="my-3">
                            フロントエンドエンジニアとしてバックエンドエンジニアと連携し、新規WEBサイトの開発に従事。<br>
                            ショッピングサイトやコーポレートサイトなど多岐にわたるプロジェクトに携わり、ゼロベースからサイト運営、ページ分析・レポート作成、SEO対策まで一貫して経験。
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
                        <p>國立高雄師範大學 語学学校で中国語学習</p>
                    </dd>
                </dl>
                <dl class="mt-4 pt-4 px-4 inview fadeinUp">
                    <dt>2018/4~2022/10</dt>
                    <dd class="mt-2 mb-0">
                        <p class="fs-2">フロントエンジニア / Webデザイナー</p>
                        <p class="fs-2">株式会社あとらす二十一</p>
                        <p class="my-3">
                            商業施設（AEON）の新規事業部や生命保険会社（Zurich）の営業デジタル部に常駐し、顧客先のプロジェクトにてフロントエンド開発に従事。<br>
                            Webサイトのデザインから構築、さらにはチラシ、ポスター、バナーなどデザイン販促ツールを制作。<br>
                            プロジェクトごとに異なる様々なCMSを使用することで、柔軟な対応力と広範な知識を習得。
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
                        <p>東京工科大学 デザイン学部デザイン学科</p>
                    </dd>
                </dl>
            </div>

      </div>
    </div>

    <!-- indexProductsBox -->
    <div class="indexProductsBox container detailInner">

        <!-- titleBox -->
        <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
            <p class="fs-3">作品一覧</p>
            <h2 class="display-2 fw-bold">PROJECTS</h2>
        </div>

        <div class="inview">
            <TopProductJpComponent />
        </div>

        <!-- 今回は使わない -->
        <!-- <SliderComponent /> -->
        <!-- <FancyBoxComponent /> -->

        <div class="text-center mt-5 inview fadeinUp">
            <router-link to="/jp/projects" class="moreButtonV2">
                <span class="fs-2">作品一覧へ</span>
                <i class="fa-solid fa-arrow-right ms-3 arrowIcon"></i>
            </router-link>
        </div>

    </div>

    <!-- indexExpertiseBox -->
    <div class="indexExpertiseBox bg-ivory overflow-hidden" id="expertise">
      <div class="container detailInner">

        <!-- titleBox -->
        <div class="titleBox mb-5 pb-5 text-center fw-bold text-orange inview fadeinUp">
              <p class="fs-3">専門知識</p>
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
                        <p class="mb-2">jQueryを使ったインタラクティブなエフェクト実装経験</p>
                        <p>Viteを使用した高速で効率的なWeb開発</p>

                        
                        <p>Vue CLIを使用したプロジェクトの立ち上げおよび管理</p>
                        <p>Vue Routerを用いたシームレスなSPA設計</p>
                        <p>再利用性を考慮したVueコンポーネントの作成</p>
                        <p>Vue Composition APIを用いたモダンサイト設計・開発</p>
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
                        <p class="mb-2">HTML5、CSS3(SCSS)、Bootstrap5を用いたレスポンシブデザインの豊富な構築経験</p>
                        <p class="mb-2">CSSアニメーションやトランジションの実装</p>
                        <p>ページ速度最適化し、ユーザーエクスペリエンスを向上</p>
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
                        <p class="mb-2">Illustratorを使ったデザイン販促ツールの制作</p>
                        <p class="mb-2">Potoshopを使ったWeb広告やサイトのデザイン</p>
                        <p>Figmaデザインを基に精密なコーディングを行い、デザインの意図を正確に反映</p>
                    </dd>
                </dl>
            </div>
            <div class="ExpertiseItem bg-white p-5 border border-2 border-black rounded-3 inview">
                <dl class="">
                    <dt class="fs-2 mb-3 text-center">
                        <i class="fa-solid fa-circle-plus fs-1"></i><br>
                        その他
                    </dt>
                    <dd class="d-inline-block text-start">
                        <p class="mb-2">Git / GitHubを使用したバージョン管理と複数エンジニアとの共同作業</p>
                        <p class="mb-2">GA / GTMを使用したボタンクリック率・スクロール位置の解析とレポート作成</p>
                        <p class="mb-2">YouTrackを使用したチーム全体のタスクの進捗管理</p>
                        <p>Ubuntu(LinuxOS)を使用した開発環境で、フロント開発やターミナル操作</p>
                    </dd>
                </dl>
            </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import HeaderJpComponent from '@/components/HeaderJpComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import TopProductJpComponent from '@/components/TopProductJpComponent.vue';
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