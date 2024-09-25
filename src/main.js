import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


// jqueryのインポート
import $ from 'jquery';
window.$ = $; // jQueryをグローバルに設定
window.jQuery = $; // jQueryをグローバルに設定

// Bootstrapのインポート
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Fancyboxのインポート
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
Fancybox.bind('[data-fancybox="gallery"]');// Fancyboxを初期化

// CSSのインポート
import './assets/css/main.css';

// jsのインポート
import './assets/js/style.js';