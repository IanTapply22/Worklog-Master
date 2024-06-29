import { defineStore } from 'pinia';

export const dateStore = defineStore('dateStore', {
    state: () => ({ 
        // All values are formatted to be straight in the markdown
        currentDate: new Date(),
        weekDay: 'Mon',
        month: 'Jan',
        day: new Date().getDate(),
        year: new Date().getFullYear()
     }),
    getters: {
        getWeekDay: (state) => state.weekDay,
        getMonth: (state) => state.month,
        getDay: (state) => state.day,
        getYear: (state) => state.year,
    },
    actions: {
        setWeekDay(weekDay: string) {
            this.weekDay = weekDay
        },
        setMonth(month: string) {
            this.month = month
        },
        setDay(day: number) {
            this.day = day
        },
        setYear(year: number) {
            this.year = year
        },
    },
})