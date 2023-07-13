<template>
    <base-wrapper>
        <section>
            <base-card>
                <h3 class=" font-extrabold text-3xl">{{ fullName }}</h3>
                <h4 class="font-bold">${{ rate }}/hour</h4>
            </base-card>
        </section>
        <section>
            <base-card>
                <header>
                    <h2 class=" font-extrabold text-3xl">Interested? Rech out now!</h2>
                    <base-button :link="true" :to="contactLink" mode="outline">Contact</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <div class=" flex gap-1">
                    <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
                </div>
                <p>{{ description }}</p>
            </base-card>
        </section>
    </base-wrapper>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
    },
    computed: {
        fullName() {
            const firstName = this.selectedCoach.firstName;
            const lastName = this.selectedCoach.lastName;
            return firstName + ' ' + lastName;
        },
        rate() {
            return this.selectedCoach.hourlyRate
        },
        areas() {
            return this.selectedCoach.areas
        },
        description() {
            return this.selectedCoach.description
        },
        contactLink() {
            return this.$route.path + '/contact'
        },
    },
}
</script>