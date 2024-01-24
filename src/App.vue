<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>