<template>
    <div class="space-y-2">
        <h2 class=" text-2xl font-semibold">Find your coach</h2>
        <div class=" space-x-4">
            <span class=" space-x-1">
                <input type="checkbox" id="frontend" checked @change="setFilter">
                <label for="frontend">Frontend</label>
            </span>
            <span class=" space-x-1">
                <input type="checkbox" id="backend" checked @change="setFilter">
                <label for="backend">Backend</label>
            </span>
            <span class=" space-x-1">
                <input type="checkbox" id="career" checked @change="setFilter">
                <label for="career">Career</label>

            </span>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            }
        }
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>