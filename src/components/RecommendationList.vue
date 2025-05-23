<template>
  <div class="mt-8">
    <h2 class="font-bold text-lg mb-4">추천 선사</h2>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="n in 8" :key="n" class="border p-2 text-center">
        <div class="font-semibold">추천 조항{{ n }}</div>
        <div class="text-sm text-gray-400">추천 조항 이미지.jpg</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 현재는 동적인 상태나 로직이 없으므로 스크립트 내부는 비워둠
</script>
