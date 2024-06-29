<template>
    <v-row>
        <v-col cols="12">
            <h2 class="text-left pb-2">Task Creator</h2>
            <v-btn class="d-flex justify-start mb-4" color="green" @click="addTask">Create Task</v-btn>

            <div v-for="(task, index) in tasks" :key="index" class="mt-3">
                <v-card>
                    <v-card-title>
                        <h3>{{ shortenDescription(task.description) }}</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="9" md="9" class="justify-right">
                                <v-textarea label="Task Description" outlined v-model="task.description" clearable></v-textarea>
                            </v-col>
                            <v-col cols="3" md="3">
                                <v-select label="Task Type" outlined :items="taskTypes" v-model="task.type"></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="mb-2 ml-1">
                            <v-btn class="d-flex justify-start" color="blue" @click="addSubdescription(index)">Add Subdescription</v-btn>
                            <v-btn class="d-flex justify-start ml-4" color="red" @click="removeSubdescription(index)">Remove Subdescription</v-btn>
                        </v-row>
                        
                        <div v-for="(sub, subIndex) in task.subdescriptions" :key="`sub-${subIndex}`">
                            <v-text-field label="Subdescription" outlined v-model="sub.description"></v-text-field>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { TaskType } from '../types/TaskType';
import { worklogStore } from '../stores/WorklogStore';

export default {
    data() {
        return {
            worklogStore: worklogStore(),
            tasks: [
                {
                    description: '',
                    type: null,
                    subdescriptions: [],
                },
            ] as Task[],
            taskTypes: Object.keys(TaskType).map(key => ({
                title: key,
            })),
        };
    },
    watch: {
        tasks: {
            handler() {
                this.worklogStore.setTasks(this.tasks);
            },
            deep: true,
        },
    },
    methods: {
        addTask() {
            this.tasks.push({
                title: '',
                type: null,
                subdescriptions: [],
            });
        },
        addSubdescription(taskIndex) {
            this.tasks[taskIndex].subdescriptions.push({
                description: '',
            });
        },
        shortenDescription(description) {
            if (description.length > 30) {
                return `${description.substring(0, 30)}...`;
            }
            return description;
        },
    },
};
</script>