<template>
  <header class="bg-slate-900 py-4 header-footer">
    <!-- ... Ваш текущий код заголовка ... -->
    <div class="container-fluid flex items-center justify-between px-6">
      <img src="/logo_Radiane.png" class="w-10" />
      <a class="navbar-brand relative text-3xl font-normal leading-none"></a>
      <div class="offcanvas-body">
        <ul
            class="navbar-nav justify-content-end flex-grow-1 pe-3 text-white flex gap-3 items-center"
        >
          <li class="nav-item" :class="{ 'active': usePageStore().currentPage === 'home' }">
            <router-link to="/" class="nav-link" aria-current="page" @click="onPageChange('home')"> Home </router-link>
          </li>
          <li class="nav-item" :class="{ 'active': usePageStore().currentPage === 'about' }">
            <router-link to="/AboutUs" class="nav-link" @click="onPageChange('about')"> About us </router-link>
          </li>
          <li class="nav-item" :class="{ 'active': usePageStore().currentPage === 'pricing' }">
            <router-link to="/Pricing" class="nav-link" @click="onPageChange('pricing')"> Pricing </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { usePageStore } from '@/stores/PageStore.js';
export default {
  methods: {
    usePageStore,
    onPageChange(page) {
      usePageStore().setCurrentPage(page);
      console.log("Active Page:", usePageStore().currentPage);
    },
  },
};
</script>

<style scoped></style>
