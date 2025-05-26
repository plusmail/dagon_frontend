<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="mb-4">👤 내 프로필</h3>

            <div v-if="loading">불러오는 중...</div>
            <div v-else>
              <p><strong>이름:</strong> {{ user.name }}</p>
              <p><strong>아이디:</strong> {{ user.username }}</p>
              <p><strong>이메일:</strong> {{ user.email || '미입력' }}</p>
              <p><strong>가입일:</strong> {{ formatDate(user.createdAt) }}</p>

              <router-link to="/reservations" class="btn btn-outline-primary me-2">예약내역 보기</router-link>
              <router-link to="/dashboard" class="btn btn-secondary">대시보드로 돌아가기</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref({})
const loading = ref(true)

const formatDate = (iso) => {
  const date = new Date(iso)
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}

onMounted(async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get('/api/user/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    user.value = res.data
  } catch (err) {
    alert('프로필 정보를 불러오지 못했습니다.')
  } finally {
    loading.value = false
  }
})
</script>
