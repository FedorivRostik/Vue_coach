<template>
    <li class=" border-2 rounded-lg px-2 py-4">
        <div></div>
        <h3 class=" font-extrabold text-3xl">{{ fullName }}</h3>
        <h4 class="font-bold">${{ rate }}/hour</h4>
        <div class=" flex gap-1">
            <base-badge :type="area" :title="area" v-for="area in areas" :key="area">{{ area }}</base-badge>
        </div>
        <div class="actions
        flex justify-end items-center">
            <base-button :to="coachContactLink" mode="outline" :link="true">Contact</base-button>
            <base-button :to="coachDetailsLink" mode="flat" :link="true">View Details</base-button>
        </div>
    </li>
</template>
<script>
export default {
    props: ['firstName', 'lastName', 'rate', 'areas', 'id'],
    methods: {
        normalizedName(name) {
            return name[0].toUpperCase() + name.slice(1);
        }
    },
    computed: {
        fullName() {
            return `${this.normalizedName(this.firstName)} ${this.normalizedName(this.lastName)}`
        },
        coachContactLink() {
            return `${this.$route.path}/${this.id}/contact`;
        },
        coachDetailsLink() {
            return `${this.$route.path}/${this.id}`;
        }
    }
}
</script>