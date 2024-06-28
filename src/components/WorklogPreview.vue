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
        <div v-for="(task, index) in worklog.tasks" :key="index">
            <div class="markdown-line">
                <span class="line-number">{{ getLineNumber(index, true, 0) }}</span>
                <span v-if="task.type" class="line-content text-left">- {{ task.type }}</span>
                <span v-else class="line-content text-left">- {{ task.description }}</span>
            </div>

            <div v-if="task.type">
                <div class="markdown-line">
                    <span class="line-number">{{ getLineNumber(index, false, 0) }}</span>
                    <pre class="line-content text-left">&#9;- {{ task.description }}</pre>
                </div>
            </div>

            <!-- Loop through subdescriptions if any -->
            <div v-for="(sub, subIndex) in task.subdescriptions" :key="`sub-${index}-${subIndex}`">
                <div class="markdown-line">
                    <span class="line-number">{{ getLineNumber(index, false, subIndex + 1) }}</span>
                    <!-- Check for subdescription type -->
                    <pre v-if="sub.type" class="line-content text-left">&#9;- {{ sub.type }}: {{ sub.description }}</pre>
                    <pre v-else class="line-content text-left">&#9;- {{ sub.description }}</pre>
                </div>
            </div>
        </div>
        <button @click="copyMarkdown">Copy</button>
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
    methods: {
        copyMarkdown() {
            let textToCopy = '';
            const lines = this.$el.querySelectorAll('.markdown-line');
            lines.forEach((line: { querySelector: (arg0: string) => any; }, index: number) => {
                const lineContent = line.querySelector('.line-content');
                // Add a newline character except for the last line
                textToCopy += lineContent ? lineContent.innerText + (index < lines.length - 1 ? '\n' : '') : '';
            });

            // Copy to clipboard
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Worklog copied to clipboard!');
            }, (err) => {
                console.error('Failed to copy markdown:', err);
                alert('Failed to copy markdown.');
            });
        },
        getFormattedDate() {
            return `${this.worklog.date.weekDay} ${this.worklog.date.month} ${this.worklog.date.day} ${this.worklog.date.year}`;
        },
        getLineNumber(index: number, isFirstLine: boolean, subIndex: number) {
            let lineNumber = 3;
            for (let i = 0; i < index; i++) {

                lineNumber += this.worklog.tasks[i].type ? 2 : 1;
  
                lineNumber += this.worklog.tasks[i].subdescriptions ? this.worklog.tasks[i].subdescriptions.length : 0;
            }
            if (!this.worklog.tasks[index].type && subIndex === 0) {
                return lineNumber;
            }

            return isFirstLine ? lineNumber : lineNumber + subIndex;
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