<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">관리자 회원가입</h3>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="username" class="form-label">아이디:</label>
                <input type="text" id="username" v-model="form.username" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">비밀번호:</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">이름:</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">회원가입</button>
            </form>

            <div class="mt-3 text-center">
              이미 계정이 있으신가요?
              <a href="/login" class="text-primary text-decoration-none">로그인 페이지로</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
  name: '',
})

const handleSubmit = () => {
  alert(`가입 완료!\n아이디: ${form.username}\n이름: ${form.name}`)
  // TODO: 서버에 전송 API 연동
}
</script>
