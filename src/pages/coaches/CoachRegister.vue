<template>
    <base-wrapper>
        <base-card>
            <h2 class=" text-3xl font-bold mb-5">Register coach now!</h2>

            <CoachForm @save-data="registerCoach" />

        </base-card>

    </base-wrapper>
</template>
<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        registerCoach(formData) {
            this.$store.dispatch('coaches/registerCoach', formData);
            this.$router.replace('/coaches');
        }
    }
}
</script>