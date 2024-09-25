import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import HomeJpView from '../views/HomeJpView.vue'
import ProjectsJpView from '../views/ProjectsJpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/jp',
    name: 'jp/home',
    component: HomeJpView
  },
  {
    path: '/jp/projects',
    name: 'jp/projects',
    component: ProjectsJpView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  // アンカーリンク機能追加
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }; // ハッシュがある場合、スムーズスクロール
    }
    return savedPosition || { top: 0 }; // 保存された位置にスクロール
  },



})

export default router
