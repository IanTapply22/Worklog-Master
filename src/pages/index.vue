<template>
  <h1 class="text-center">Worklog Master</h1>
  <h3 class="text-center font-weight-light">An easy-to-use systsem that allows me to easily create worklogs for my work. This is a personal project that anyone can use to easily generate daily logs of work done.</h3>
  <WorklogPreview :worklog=worklog />
</template>

<script lang="ts">
import { Worklog } from '@/types/worklog/Worklog';
import WorklogPreview from '../components/WorklogPreview.vue';
import { WorklogDay } from '../types/worklog/WorklogDay';
import { WorklogMonth } from '../types/worklog/WorklogMonth';
import { TaskType } from '../types/TaskType';

export default {
  name: 'App',
  components: {
    WorklogPreview
  },
  data() {
    return {
      worklog: {
        date: {
          weekDay: WorklogDay.Monday, // Example usage, assuming WorklogDay is an enum or similar
          month: WorklogMonth.January, // Example usage, assuming WorklogMonth is an enum or similar
          day: 1, // Example day of the month
          year: 2023 // Example year
        },
        tasks: [
          {
            type: TaskType.setback,
            description: 'Description of Task 1'
          },
          {
            description: 'Description of Task 2',
            subdescriptions: [
              {
                description: 'Subdescription 1 of Task 2'
              },
              {
                type: TaskType.meeting,
                description: 'Subdescription 2 of Task 2'
              }
            ]
          }
        ]
        // Add other properties of Worklog here as needed
      } as Worklog
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>