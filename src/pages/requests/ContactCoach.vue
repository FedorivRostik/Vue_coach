<template>
    <form @submit.prevent="submitForm" class=" space-y-6 py-6 px-9 border rounded-lg">
        <div class="register-form">
            <label for="email">Your email</label>
            <input type="text" id="email" v-model.trim="email">
        </div>
        <div class="register-form">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <p v-if="!formIsValid" class="danger-text">Please fix errors and submit again</p>
        <div class="  flex items-center justify-center">

            <base-button>Send</base-button>
        </div>

    </form>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        submitForm() {
            this.formIsValid = true;
            if (!this.email || !this.message || !this.email.includes('@')) {
                this.formIsValid = false;
                return;
            }

            this.$store.dispatch('requests/contactCoach', {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id
            })
            this.$router.replace('/coaches');
        }
    },

}
</script>