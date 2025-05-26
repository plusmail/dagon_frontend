<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="mb-4">🎣 사용자 대시보드</h2>
        <p><strong>안녕하세요, {{ user.name }}님!</strong></p>
        <p>예약 내역을 확인하고 조황 정보를 확인해보세요.</p>

        <router-link to="/reservations" class="btn btn-outline-primary me-2">내 예약 조회</router-link>
        <router-link to="/tide" class="btn btn-outline-secondary">오늘의 물때표</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref({ name: '' })

onMounted(async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get('/api/user/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    user.value = res.data
  } catch (err) {
    alert('사용자 정보를 불러올 수 없습니다.')
  }
})
</script>
