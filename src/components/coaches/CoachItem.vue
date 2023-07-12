<template>
    <li class=" border">
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <span v-for="area in areas" :key="area">{{ area }}</span>
        </div>
        <div class="actions">
            <router-link :to="coachContactLink">Contact</router-link>
            <router-link :to="coachDetailsLink">View Details</router-link>
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