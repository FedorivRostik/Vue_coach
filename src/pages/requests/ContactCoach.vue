<template>
    <form @submit.prevent="submitForm" class=" space-y-6">
        <div class="register-form">
            <label for="email">Your email</label>
            <input type="text" id="email" v-model.trim="email">
        </div>
        <div class="register-form">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <p v-if="!formIsValid" class="danger-text">Please fix errors and submit again</p>
        <base-button class="float-right">Send</base-button>

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

            this.$emit()
        }
    },

}
</script>