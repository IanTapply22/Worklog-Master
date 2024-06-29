<template>
    <v-row>
        <v-col cols="12">
            <h2 class="text-left pb-2">Date Input</h2>
            <v-select :items="worklogDays" label="Week Day" :placeholder="getCurrentDayOfTheWeek()" v-model="selectedWeekDay"></v-select>
            <v-select :items="worklogMonth" label="Month" :placeholder="getCurrentMonth()" v-model="selectedMonth"></v-select>
            <v-number-input :reverse="false" controlVariant="default" label="Day" :placeholder="getCurrentDayOfTheMonth()" :hideInput="false"
                :inset="true" :min=0 :max=31 v-model="selectedDay"></v-number-input>
            <v-number-input :reverse="false" controlVariant="default" label="Year" :placeholder="getCurrentYear()" :hideInput="false"
                :inset="true" :min=1970 v-model="selectedYear"></v-number-input>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { WorklogDay } from '@/types/worklog/WorklogDay';
import { WorklogMonth } from '@/types/worklog/WorklogMonth';
import { dateStore } from '../stores/DateStore';

interface IndexedWorklogDay {
  [key: string]: any;
}

interface IndexedWorklogMonth {
  [key: string]: any;
}

const indexedWorklogDay: IndexedWorklogDay = WorklogDay;
const indexedWorklogMonth: IndexedWorklogMonth = WorklogMonth;

export default {
    data() {
        return {
            dateStore: dateStore(),
            currentDate: new Date(),
            // Week day and month items for dropdown
            worklogDays: Object.keys(WorklogDay).map(key => ({
                title: key,
            })),
            worklogMonth: Object.keys(WorklogMonth).map(key => ({
                title: key,
            })),
            // Inputs
            selectedWeekDay: '',
            selectedMonth: '',
            selectedDay: '',
            selectedYear: '',
        };
    },
    // Watchers to watch values and to change them in the store
    watch: {
        selectedWeekDay: function (newVal) {
            this.changeWeekDay();
        },
        selectedMonth: function (newVal) {
            this.changeMonth();
        },
        selectedDay: function (newVal) {
            this.changeDay();
        },
        selectedYear: function (newVal) {
            this.changeYear();
        }
    },
    methods: {
        getCurrentMonth() {
            // Convert to the month name
            return this.currentDate.toLocaleString('default', { month: 'long' });
        },
        getCurrentDayOfTheWeek() {
            // Convert to the day of the week
            return this.currentDate.toLocaleString('default', { weekday: 'long' });
        },
        getCurrentDayOfTheMonth() {
            // Get the day of the month
            return this.currentDate.getDate().toString();
        },
        getCurrentYear() {
            // Get the year
            return this.currentDate.getFullYear().toString();
        },

        /** ENUM CONVERSION */
        getWeekDay(weekDay: string) {
            // Get the enum with the name
            return indexedWorklogDay[weekDay];
        },
        getMonth(month: string) {
            // Get the enum with the name
            return indexedWorklogMonth[month];
        },

        changeWeekDay() {
            this.dateStore.setWeekDay(this.getWeekDay(this.selectedWeekDay));
        },
        changeMonth() {
            this.dateStore.setMonth(this.getMonth(this.selectedMonth));
        },
        changeDay() {
            this.dateStore.setDay(parseInt(this.selectedDay));
        },
        changeYear() {
            this.dateStore.setYear(parseInt(this.selectedYear));
        },
    },
    mounted() {
        this.selectedWeekDay = this.getCurrentDayOfTheWeek();
        this.selectedMonth = this.getCurrentMonth();
        this.selectedDay = this.getCurrentDayOfTheMonth();
        this.selectedYear = this.getCurrentYear();
    }
};
</script>