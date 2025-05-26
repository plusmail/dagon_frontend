<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="text-center mb-4">회원가입</h3>
            <form @submit.prevent="handleSignup">
              <div class="mb-3">
                <label for="username" class="form-label">아이디</label>
                <input v-model="form.username" type="text" id="username" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">비밀번호</label>
                <input v-model="form.password" type="password" id="password" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">이름</label>
                <input v-model="form.name" type="text" id="name" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">가입하기</button>
            </form>

            <div class="text-center mt-3">
              이미 계정이 있으신가요?
              <router-link to="/login">로그인 하기</router-link>
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

const form = ref({
  username: '',
  password: '',
  name: ''
})

const handleSignup = async () => {
  try {
    const res = await axios.post('/api/signup', form.value)
    alert('회원가입 성공! 로그인 페이지로 이동합니다.')
    await router.push('/login')
  } catch (err) {
    alert('회원가입 실패: ' + (err.response?.data?.message || '알 수 없는 오류'))
  }
}
</script>
