<template>
  <a href="#/reservations" class="reservation-btn btn btn-danger">
    📝 예약하기
  </a>
</template>

<script setup>
// 별도 로직 없음
</script>

<style scoped>
.reservation-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.reservation-btn:hover {
  transform: scale(1.05);
}
</style>
