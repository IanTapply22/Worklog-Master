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
        /**
         * Set the day of the week
         * @param weekDay The day of the week
         */
        setWeekDay(weekDay: string) {
            this.weekDay = weekDay
        },
        /**
         * Set the month
         * @param month The month
         */
        setMonth(month: string) {
            this.month = month
        },
        /**
         * Set the day of the month
         * @param day The day of the month
         */
        setDay(day: number) {
            this.day = day
        },
        /**
         * Sets the year
         * @param year The year
         */
        setYear(year: number) {
            this.year = year
        },
    },
})