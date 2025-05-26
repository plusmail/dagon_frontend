<template>
  <div>
    <HeaderNav />
    <div class="bg-blue-100 py-2 text-center">🌊 바다낚시 전용 레이아웃</div>
    <router-view />
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
</script>
