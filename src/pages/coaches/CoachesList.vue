<template>
    <base-wrapper>

        <base-dialog :show="!!error" @close="fixError" title="Error">
            <p>{{ error }}</p>
        </base-dialog>

        <base-card>
            <CoachFilter @change-filter="setFilters" />
        </base-card>


        <base-card>
            <div class="controls
            flex justify-between items-center">
                <base-button @click="loadCoaches(true)" mode="outline">Refresh</base-button>
                <base-button v-if="!isLoggedIn" to="/auth?redirect=register" mode="outline" :link="true">Login for creating
                    coach
                    account</base-button>
                <base-button to="/register" mode="outline" :link="true"
                    v-if="!isCoach && !this.isLoading && isLoggedIn">Register</base-button>

            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <transition-group tag="ul" v-if="hasCoaches" class="space-y-2" name="coach-list" mode="out-in">
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate" :id="coach.id">{{
                        coach.firstName
                    }}</coach-item>
            </transition-group>
            <div v-else class="flex items-center justify-center text-lg text-green-500 font-semibold">
                <h3 v-if="isLoading"> Loading coaches...</h3>
                <h3 v-else> No coaches found.</h3>
            </div>
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
            error: null,
            isLoading: false,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true

            }
        }
    },
    created() {
        this.loadCoaches()
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated
        },
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
            return this.$store.getters['coaches/hasCoaches'] && !this.isLoading;
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh = false) {

            try {
                this.isLoading = true;
                await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh });
                this.isLoading = false;
            }
            catch (erorr) {
                this.error = this.error?.message ?? 'Something went wrong'
            }
        },
        fixError() {
            this.error = null;
        },
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