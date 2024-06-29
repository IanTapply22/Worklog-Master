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
                            <v-col cols="12" md="6">
                                <v-text-field label="Task Description" outlined v-model="task.description" clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select label="Task Type" outlined :items="taskTypes" v-model="task.type"></v-select>
                            </v-col>
                        </v-row>
                        <v-btn class="d-flex justify-start mb-2" color="blue" @click="addSubdescription(index)">Add Subdescription</v-btn>
                        <div v-for="(sub, subIndex) in task.subdescriptions" :key="`sub-${subIndex}`">
                            <v-text-field label="Subdescription" outlined v-model="sub.description"></v-text-field>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { TaskType } from '../types/TaskType';

export default {
    data() {
        return {
            tasks: [
                {
                    description: '',
                    type: null,
                    subdescriptions: [],
                },
            ],
            taskTypes: Object.keys(TaskType).map(key => ({
                title: key,
            })),
        };
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
            if (description.length > 20) {
                return `${description.substring(0, 20)}...`;
            }
            return description;
        },
    },
};
</script>