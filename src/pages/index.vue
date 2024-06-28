<template>
  <h1 class="text-center">Worklog Master</h1>
  <h3 class="text-center font-weight-light">An easy-to-use systsem that allows me to easily create worklogs for my work. This is a personal project that anyone can use to easily generate daily logs of work done.</h3>
  <CodeBox :code="sampleCode" />
</template>

<script>
import CodeBox from '../components/CodeBox.vue';

export default {
  name: 'App',
  components: {
    CodeBox
  },
  data() {
    return {
      sampleCode: 
      `example code\n\n\n\n\n\ndddd`
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