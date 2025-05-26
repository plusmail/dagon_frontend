import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/components/Login.vue'
import AdminLogin from '@/components/AdminLogin.vue'
import UserDashboard from '@/components/UserDashboard.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import Signup from "@/components/Signup.vue";

const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/admin/login', component: AdminLogin},
    {
        path: '/dashboard',
        component: UserDashboard,
        meta: {requiresUser: true}
    },
    {
        path: '/admin',
        component: AdminDashboard,
        meta: {requiresAdmin: true}
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/components/Profile.vue'),
        meta: {requiresUser: true}
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 인증 가드
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role') // "user" 또는 "admin"

    if (to.meta.requiresAdmin && (!token || role !== 'admin')) {
        next('/admin/login')
    } else if (to.meta.requiresUser && (!token || role !== 'user')) {
        next('/login')
    } else {
        next()
    }
})

export default router
