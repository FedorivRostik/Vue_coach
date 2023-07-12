<template>
    <base-wrapper>
        <section class=" container max-w-6xl mx-auto px-6 py-12 border">
            <p class=" text-center">Filter</p>
        </section>

        <section class=" container max-w-6xl mx-auto px-6 py-12 border">
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register</router-link>
            </div>

            <ul v-if="hasCoaches">
                <coach-item v-for="coach in coaches" :key="coach.id" :firstName="coach.firstName" :lastName="coach.lastName"
                    :areas="coach.areas" :rate="coach.rate" :id="coach.id">{{ coach.firstName }}</coach-item>
            </ul>
            <h3 v-else> No coaches found.</h3>
        </section>

    </base-wrapper>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue'

export default {
    components: { CoachItem },
    computed: {
        coaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
    }
}
</script>