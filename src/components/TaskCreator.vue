<template>
    <div class="task-creator">
        <input type="text" v-model="taskDescription" placeholder="Task description" />
        <select v-model="taskType">
        <option value="setback">Setback</option>
        <option value="meeting">Meeting</option>
        <option value="task">Task</option>
        </select>
        <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskDescription: '',
            taskType: 'setback'
        };
    },
    methods: {
        addTask() {
            this.$emit('add-task', {
                description: this.taskDescription,
                type: this.taskType
            });
            this.taskDescription = '';
            this.taskType = 'setback';
        }
    }
};
</script>