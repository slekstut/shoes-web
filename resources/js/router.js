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
    }
];

const router = new Router ({
    routes: routes,
    mode: 'history'
});

export default router;