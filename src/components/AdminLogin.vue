<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="text-center mb-4">관리자 로그인</h3>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label">아이디</label>
                <input v-model="username" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">비밀번호</label>
                <input v-model="password" type="password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-dark w-100">로그인</button>
            </form>
            <div class="text-center mt-3">
              <router-link to="/signup">관리자 회원가입</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const login = async () => {
  try {
    const res = await axios.post('/api/admin/login', {
      username: username.value,
      password: password.value
    })

    localStorage.setItem('token', res.data.accessToken)
    localStorage.setItem('role', res.data.role)

    if (res.data.role === 'admin') {
      router.push('/admin')
    } else {
      alert('일반 사용자 계정으로는 관리자 로그인 불가합니다.')
    }
  } catch (err) {
    alert('관리자 로그인 실패: 아이디 또는 비밀번호를 확인하세요.')
  }
}
</script>
