import { defineStore } from 'pinia';


export const usePageStore = defineStore('PageStore', {
    state: () => ({
        currentPage: 'home',
    }),
    actions: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
});

