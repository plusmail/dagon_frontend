// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from '@/layouts/MainLayout.vue'
import FishingLayout from '@/layouts/FishingLayout.vue'
import SaltwaterLayout from '@/layouts/SaltwaterLayout.vue'
import FreshwaterLayout from '@/layouts/FreshwaterLayout.vue'
import BusLayout from '@/layouts/BusLayout.vue'
import CommunityLayout from '@/layouts/CommunityLayout.vue'

// Views
import Home from '@/components/Home.vue'
import FishingReportList from '@/components/FishingReportList.vue'
import SaltwaterPage from '@/components/Saltwater.vue'
import FreshwaterPage from '@/components/Freshwater.vue'
import BusPage from '@/components/Bus.vue'
import CommunityPage from '@/components/Community.vue'
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'Home', component: Home }
        ]
    },
    {
        path: '/fishing-reports',
        component: FishingLayout,
        children: [
            { path: '', name: 'FishingReports', component: FishingReportList }
        ]
    },
    {
        path: '/saltwater',
        component: SaltwaterLayout,
        children: [
            { path: '', name: 'Saltwater', component: SaltwaterPage }
        ]
    },
    {
        path: '/freshwater',
        component: FreshwaterLayout,
        children: [
            { path: '', name: 'Freshwater', component: FreshwaterPage }
        ]
    },
    {
        path: '/bus',
        component: BusLayout,
        children: [
            { path: '', name: 'Bus', component: BusPage }
        ]
    },
    {
        path: '/community',
        component: CommunityLayout,
        children: [
            { path: '', name: 'Community', component: CommunityPage }
        ]
    },
    {
        path: '/login',
        component: AuthLayout,
        children: [
            { path: '', name: 'Login', component: Login }
        ]
    },
    {
        path: '/signup',
        component: AuthLayout,
        children: [
            { path: '', name: 'Signup', component: Signup }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router