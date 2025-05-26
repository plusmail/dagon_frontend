<template>
  <div class="container py-4">
    <HeaderNav/>
    <!-- 로그인/회원가입 전용 페이지일 경우 -->
    <router-view v-if="isAuthPage"/>

    <div v-else>
      <Banner/>

      <div class="row mb-4">
        <div class="col-md-4">
          <ReservationBox/>
        </div>
        <div class="col-md-8">
          <NoticeBox/>
        </div>
        <SideButtons/>
        <RecommendationList/>
        <PopularList/>
      </div>

    </div>
  </div>
  <ReservationButton/> <!-- ✅ 항상 뜨게 추가 -->

</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue';
import ReservationBox from './components/ReservationBox.vue';
import NoticeBox from './components/NoticeBox.vue';
import SideButtons from './components/SideButtons.vue';
import RecommendationList from './components/RecommendationList.vue';
import PopularList from './components/PopularList.vue';
import Banner from "@/components/Banner.vue";
import ReservationButton from "@/components/ReservationButton.vue";
import AdminSignup from "@/components/AdminSignup.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

// 현재 경로가 "/signup"인지 확인
// 로그인, 회원가입, 관리자 로그인 경로 체크
const isAuthPage = computed(() =>
    ['/login', '/signup', '/admin/login'].includes(route.path)
)
</script>

<style scoped>
/* 추가적인 커스텀 스타일 필요 시 여기에 작성 */
</style>
