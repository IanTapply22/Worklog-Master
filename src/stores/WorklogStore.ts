import { defineStore } from 'pinia';
import { Worklog } from '../types/Worklog/Worklog';
import { Task } from '../types/Task';

export const worklogStore = defineStore('dateStore', {
    state: () => ({ 
        worklog: null as Worklog | null,
        tasks: [] as Task[]
     }),
    getters: {
        getWorklog: (state) => state.worklog,
        getTasks: (state) => state.tasks,
    },
    actions: {
        setWorklogs(worklogs: Worklog[]) {
            this.worklogs = worklogs
        },
        setTasks(tasks: any) {
            this.tasks = tasks
        },
        addTask(task: Task) {
            this.tasks.push(task)
        }
    },
})