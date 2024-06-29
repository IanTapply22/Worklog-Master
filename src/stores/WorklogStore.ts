import { defineStore } from 'pinia';
import { Worklog } from '../types/Worklog/Worklog';

export const dateStore = defineStore('dateStore', {
    state: () => ({ 
        worklogs: [] as Worklog[],
     }),
    getters: {
        getWorklogs: (state) => state.worklogs,
    },
    actions: {
        setWorklogs(worklogs: Worklog[]) {
            this.worklogs = worklogs
        }
    },
})