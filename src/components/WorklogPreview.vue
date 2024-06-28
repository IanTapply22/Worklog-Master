<template>
    <div class="markdown-preview">
        <!-- Date -->
        <div class="markdown-line">
            <span class="line-number">1</span>
            <span class="line-content text-left">### {{ getFormattedDate() }}</span>
        </div>
        <!-- Empty line -->
        <div class="markdown-line">
            <span class="line-number">2</span>
            <span class="line-content text-left"></span>
        </div>
        <!-- Tasks organization -->
        <div v-for="(task, index) in worklog.tasks" :key="index" class="markdown-line">
            <span class="line-number">{{ index + 3 }}</span>
            
            <span class="line-content text-left">{{ task.description }}</span>
        </div>
        <button @click="copyCode">Copy</button>
    </div>
</template>

<script lang="ts">
import { Worklog } from '../types/worklog/Worklog';

export default {
    props: {
        worklog: {
            type: Object as () => Worklog,
            required: true
        }
    },
    data() {
        return {
            lines: []
        };
    },
    mounted() {
        // this.lines = this.code.split('\n');
    },
    methods: {
        copyCode() {
            const textToCopy = this.lines.join('\n');
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Code copied to clipboard!');
            }, (err) => {
                console.error('Failed to copy code:', err);
                alert('Failed to copy code.');
            });
        },
        getFormattedDate() {
            return `${this.worklog.date.weekDay} ${this.worklog.date.month} ${this.worklog.date.day} ${this.worklog.date.year}`;
        }
    }
}
</script>

<style scoped>
.markdown-preview {
    width: 700px;
    border: 1px solid #ccc;
    padding: 10px;
    position: relative;
    white-space: pre;
}

.markdown-line {
    display: flex;
}

.line-number {
    color: grey;
    user-select: none;
    /* Prevent selection */
    padding-right: 10px;
}

.line-content {
    flex: 1;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>