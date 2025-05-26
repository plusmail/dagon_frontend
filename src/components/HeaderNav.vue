<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">낚시포털</a>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- 중앙 메뉴 -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in menuItems" :key="item.label">
            <a class="nav-link" :href="item.link">{{ item.label }}</a>
          </li>
        </ul>

        <!-- 우측 영역: 날씨, 물때, 프로필 -->
        <div class="d-flex align-items-center gap-2">
          <!-- 오늘 날씨 버튼 -->
          <a class="btn btn-outline-light btn-sm" href="#/weather">🌤️ 오늘 날씨</a>

          <!-- 물때표 버튼 -->
          <a class="btn btn-outline-light btn-sm" href="#/tide">🌊 물때표</a>

          <!-- 로그인 상태별 프로필 -->
          <template v-if="!isLoggedIn">
            <a class="btn btn-light btn-sm" href="/signup">회원가입</a>
            <a class="btn btn-light btn-sm" href="/login">로그인</a>
          </template>
          <template v-else>
            <div class="dropdown">
              <a
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  href="#"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <img
                    :src="user.profileImage"
                    alt="profile"
                    width="32"
                    height="32"
                    class="rounded-circle me-2"
                />
                {{ user.name }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><a class="dropdown-item" href="#/profile">내 정보</a></li>
                <li><a class="dropdown-item" href="#/reservations">예약조회</a></li> <!-- ✅ 추가 -->
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#" @click="logout">로그아웃</a></li>
              </ul>

            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 상태 관리 (예시)
const isLoggedIn = ref(true)
const user = ref({
  name: '홍길동',
  profileImage: 'https://via.placeholder.com/32x32.png?text=H'
})

const logout = () => {
  alert('로그아웃되었습니다.')
  isLoggedIn.value = false
}

const menuItems = [
  { label: '조회센터', link: '#/inquiry' },
  { label: '바다낚시', link: '#/saltwater' },
  { label: '민물낚시', link: '#/freshwater' },
  { label: '커뮤니티', link: '#/community' },
  { label: '고객센터', link: '#/support' }
]
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
.dropdown-menu {
  min-width: 150px;
}
</style>
