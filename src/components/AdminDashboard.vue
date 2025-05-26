<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="mb-4">🛠️ 관리자 대시보드</h2>
        <p><strong>관리자: {{ admin.name }}</strong></p>
        <p>회원 및 예약 현황을 확인하고 시스템을 관리할 수 있습니다.</p>

        <router-link to="/admin/users" class="btn btn-dark me-2">회원관리</router-link>
        <router-link to="/admin/reservations" class="btn btn-outline-dark">예약관리</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const admin = ref({ name: '' })

onMounted(async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get('/api/admin/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    admin.value = res.data
  } catch (err) {
    alert('관리자 정보를 불러올 수 없습니다.')
  }
})
</script>
