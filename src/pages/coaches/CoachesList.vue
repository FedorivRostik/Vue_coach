<template>
    <base-wrapper>
        <base-card>
            <p class=" text-center">Filter</p>
        </base-card>


        <base-card>
            <div class="controls
            flex justify-between items-center">
                <base-button mode="outline">Refresh</base-button>
                <base-button to="/register" mode="outline" :link="true">Register</base-button>

            </div>
            <ul v-if="hasCoaches" class="space-y-2">
                <coach-item v-for="coach in coaches" :key="coach.id" :firstName="coach.firstName" :lastName="coach.lastName"
                    :areas="coach.areas" :rate="coach.hourlyRate" :id="coach.id">{{ coach.firstName
                    }}</coach-item>
            </ul>
            <h3 v-else> No coaches found.</h3>
        </base-card>


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