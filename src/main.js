import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { usePageStore } from "@/stores/PageStore.js";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);


const PageStore = usePageStore();
pinia.use(PageStore);

app.use(router);
app.mount('#app');
