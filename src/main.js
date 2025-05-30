// main.js 또는 main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router' // 라우터 임포트


import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 추가
import 'bootstrap'; // 선택: JS 기능 사용 시

createApp(App)
    .use(router)
    .mount('#app');
