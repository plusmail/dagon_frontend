<template>
  <HeaderNav />
  <div class="container py-5">
    <router-view />
  </div>
</template>
<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
</script>
