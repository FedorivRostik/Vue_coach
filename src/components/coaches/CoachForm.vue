<template>
    <form @submit.prevent="submitForm" class=" space-y-6">
        <div class="register-form">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname" v-model.trim="firstname">
        </div>
        <div class="register-form">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" v-model.trim="lastname">
        </div>
        <div class="register-form">
            <h3 class="text-xl font-semibold">Areas of expertise</h3>
            <div class=" space-x-3">
                <input type="checkbox" id="frontend" value="frontend" v-model.trim="carrer">
                <label for="frontend">Frontend</label>
            </div>
            <div class=" space-x-3">
                <input type="checkbox" id="backend" value="backend" v-model.trim="carrer">
                <label for="backend">Backend</label>
            </div>
            <div class="space-x-3">
                <input type="checkbox" id="carrer" value="carrer" v-model.trim="carrer">
                <label for="carrer">Carrer</label>
            </div>
        </div>
        <div class="register-form">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="register-form">
            <label for="rate">Rate</label>
            <input type="number" id="rate" v-model.number="rate">
        </div>
        <base-button>Register</base-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            description: '',
            areas: [],
            rate: null,
        }
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstname,
                last: this.lastname,
                description: this.description,
                rate: this.rate,
                areas: this.areas
            }
            this.$emit('register-coach', formData);
        }
    }
}
</script>