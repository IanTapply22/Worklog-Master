<template>
    <div class="markdown-preview">
        <!-- <div v-for="(line, index) in lines" :key="index" class="markdown-line">
            <span class="line-number">{{ index + 1 }}</span>
            <span class="line-content text-left">{{ line }}</span>
        </div> -->
        <div class="markdown-line">
            <span class="line-number">1</span>
            <span class="line-content text-left">{{ getWorklog().date }}</span>
        </div>
        <button @click="copyCode">Copy</button>
    </div>
</template>

<script>
import Worklog from '../types/worklog/Worklog.ts';

export default {
    props: {
        worklog: {
            type: Worklog,
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
        getWorklog() {
            return this.$props.worklog;
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