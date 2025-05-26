<template>
  <div>
    <HeaderNav />
    <Banner />
    <router-view />
    <ReservationButton />
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import Banner from '@/components/Banner.vue'
import ReservationButton from '@/components/ReservationButton.vue'
</script>
