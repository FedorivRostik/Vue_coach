<template>
    <base-wrapper>
        <base-card>
            <h2 class=" text-3xl font-bold mb-5">Register coach now!</h2>
            <CoachForm />
        </base-card>

    </base-wrapper>
</template>
<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    }
}
</script>