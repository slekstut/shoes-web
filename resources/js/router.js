import Axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/About.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('./views/Products.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./views/Contact.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./components/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/Dashboard.vue'),
        beforeEnter: (to, form, next) => {
            Axios.get('/api/authenticated').then(() => {
                next()
            }).catch(() => {
                return next({ name: 'login'})
            })
        }
    }
];

const router = new Router ({
    routes: routes,
    mode: 'history'
});

export default router;