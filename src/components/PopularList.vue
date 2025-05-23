<template>
  <div class="mt-8">
    <h2 class="font-bold text-lg mb-4">최근 인기 조항</h2>
    <div class="grid grid-cols-6 gap-2">
      <button v-for="n in 6" :key="n" class="border px-4 py-2">인기 조항{{ n }}</button>
    </div>
  </div>
</template>

<script setup>
// 현재는 동적인 상태나 로직이 없기 때문에 script setup 내 코드 없음
</script>
