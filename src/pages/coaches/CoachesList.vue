<template>
    <base-wrapper>
        <base-card>
            <CoachFilter @change-filter="setFilters" />
        </base-card>


        <base-card>
            <div class="controls
            flex justify-between items-center">
                <base-button mode="outline">Refresh</base-button>
                <base-button to="/register" mode="outline" :link="true">Register</base-button>

            </div>

            <transition-group tag="ul" v-if="hasCoaches" class="space-y-2" name="coach-list" mode="out-in">
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate" :id="coach.id">{{
                        coach.firstName
                    }}</coach-item>
            </transition-group>

            <h3 v-else> No coaches found.</h3>
        </base-card>


    </base-wrapper>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components: { CoachItem, CoachFilter },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true

            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        }
    },
}
</script>
<style scoped>
.coach-list-enter-active {
    animation: fade .3s ease-in-out forwards
}

.coach-list-leave-active {
    animation: fade .3s ease-in-out forwards reverse;

}

.coach-list-move {
    transition: transform 0.8s ease;
}
</style>