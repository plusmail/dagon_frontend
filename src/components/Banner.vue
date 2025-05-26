<template>
  <div class="banner">
    <h2 class="mb-2">🎣 오늘의 낚시 정보! 놓치지 마세요!</h2>
    <p class="mb-0">실시간 조황 · 날씨 · 물때표 제공</p>
  </div>
</template>

<script setup>
// 로직 없음
</script>

<style scoped>
.banner {
  height: 300px; /* ✅ 여기 핵심 */
  background-image: url('https://placehold.co/1200x350?text=Fishing+Banner');
  background-size: cover;
  background-position: center;
  color: white;
  text-shadow: 1px 1px 3px black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
