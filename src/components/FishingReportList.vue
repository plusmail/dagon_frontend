<template>
  <div class="container mt-4">
    <h3 class="mb-4">🎣 전체 조황 정보</h3>
    <div v-if="loading">불러오는 중...</div>
    <div v-else>
      <div v-for="report in reports" :key="report.id" class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5>{{ report.boatName }} ({{ report.fishingPoint }})</h5>
          <p>어종: {{ report.fishSpecies }} / 마릿수: {{ report.count }}</p>
          <p class="text-muted small">{{ formatDate(report.date) }}</p>
        </div>
      </div>

      <!-- 페이지네이션 -->
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: page === 1 }">
            <button class="page-link" @click="changePage(page - 1)">이전</button>
          </li>
          <li
              class="page-item"
              v-for="p in totalPages"
              :key="p"
              :class="{ active: p === page }"
          >
            <button class="page-link" @click="changePage(p)">{{ p }}</button>
          </li>
          <li class="page-item" :class="{ disabled: page === totalPages }">
            <button class="page-link" @click="changePage(page + 1)">다음</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const page = ref(1)
const size = 10
const reports = ref([])
const totalPages = ref(1)
const loading = ref(true)

const loadData = async () => {
  loading.value = true
  const res = await axios.get(`/api/fishing-report/get-all?page=${page.value}&size=${size}`)
  const result = res.data
  reports.value = result.items || result
  totalPages.value = result.totalPages || 1
  loading.value = false
}

onMounted(loadData)
watch(page, loadData)

const changePage = (p) => {
  if (p >= 1 && p <= totalPages.value) page.value = p
}

const formatDate = (d) => new Date(d).toLocaleDateString()
</script>
