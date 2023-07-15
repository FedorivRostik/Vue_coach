<template>
    <base-wrapper>
        <base-card>
            <base-dialog :show="!!error" @close="fixError" title="Error">
                <p>{{ error }}</p>
            </base-dialog>
            <base-dialog fixed :show="isLoading" title="Autheticating...">
                <base-spinner></base-spinner>
            </base-dialog>
            <form class=" space-y-6" @submit.prevent="submitForm">
                <div class="register-form">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model.trim="email">
                </div>
                <div class="register-form">
                    <label for="password">Password</label>
                    <input type="text" id="password" v-model.trim="password">
                </div>
                <p class="danger-text" v-if="!formIsValid">Form is invalid email must contain @ and password at least 6
                    symbols</p>
                <div class="flex items-center justify-center gap-5">
                    <base-button>{{ submitButtonCaption }}</base-button>
                    <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchButtonCaption }}</base-button>
                </div>
            </form>

        </base-card>
    </base-wrapper>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (!this.email?.includes('@') || !this.password || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;
            const actionPay = {
                email: this.email,
                password: this.password
            };

            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', actionPay);
                } else {
                    await this.$store.dispatch('signup', actionPay);
                }
                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectUrl);
            } catch (err) {
                this.error = err.message || 'Failed to autheticate'
            }
            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
                return;
            }
            this.mode = 'login';
        },
        fixError() {
            this.error = null;
        }
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Login'
            }
            return 'Register';
        },
        switchButtonCaption() {
            if (this.mode === 'login') {
                return 'Sign Up instead'
            }
            return 'Login instead';
        }
    },
}
</script>