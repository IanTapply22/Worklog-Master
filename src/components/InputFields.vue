<template>
    <div class="input-fields">
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Task Type">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Task Description">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Subtask Type">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Subtask Description">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Subtask Type">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Subtask Description">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'InputFields',
    props: {
        worklog: {
            type: Object,
            required: true
        }
    }
}
</script>