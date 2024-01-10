import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/components/HomePage.vue';
import AboutPage from '../src/components/AboutPage.vue';  // Agrega la importación de AboutPage
import store from './store';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
        meta: { requireAuth: true } //Creamo Meta
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(store);  // Usa Vuex en la aplicación
app.use(router);  // Usa Vue Router en la aplicación
app.mount('#app');

router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if (rutaProtegida && store.state.token === null) {
        // Ruta protegida es true
        // Token es nulo, por ende redirigimos a la página de inicio
        next({ name: 'HomePage' });
    } else {
        // En caso contrario, sigue...
        next();
    }
});

export default router;
