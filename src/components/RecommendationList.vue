<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">조황정보</h1>

    <div v-if="loading">조황 정보를 불러오는 중...</div>

    <div v-else class="grid gap-4">
      <div
          v-for="report in reports"
          :key="report.id"
          class="border rounded-lg shadow p-4 flex flex-col md:flex-row gap-4"
      >
        <img
            :src="report.image_url"
            alt="조황 사진"
            class="w-full md:w-48 h-48 object-cover rounded"
        />
        <div class="flex-1">
          <h2 class="text-xl font-semibold">{{ report.boat_name }} - {{ report.fishing_point }}</h2>
          <p class="text-gray-600">날짜: {{ formatDate(report.date) }}</p>
          <p>어종: {{ report.fish_species }}</p>
          <p>마릿수: {{ report.count }} 마리</p>
          <p>메모: {{ report.memo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const reports = ref([])
const loading = ref(true)

const fetchReports = async () => {
  try {
    const res = await axios.get('/api/fishing-report/get-all')
    reports.value = res.data
  } catch (e) {
    console.error('조황정보 불러오기 실패:', e)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString()
}

onMounted(() => {
  fetchReports()
})
</script>

<style scoped>
img {
  border: 1px solid #ddd;
}
</style>
