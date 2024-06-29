<template>
    <v-row>
        <v-col cols="12">
            <h2 class="text-left pb-2">Task Creator</h2>
            <v-btn class="d-flex justify-start mb-2" color="green" @click="taskCount++">Create Task</v-btn>

            <div v-for="(task, index) in taskCount" :key="index">
                <v-text-field label="Task Description" ></v-text-field>
                <v-text-field label="Subtask Description" ></v-text-field>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            taskCount: 1,
        };
    },
};
</script>