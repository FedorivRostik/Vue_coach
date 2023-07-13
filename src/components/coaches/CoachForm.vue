<template>
    <form @submit.prevent="submitForm" class=" space-y-6">
        <div class="register-form" :class="{ invalid: !firstname.isValid }">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname" v-model.trim="firstname.val" @blur="setValid('firstname')">
            <p v-if="!firstname.isValid" class="danger-text">Input characters</p>
        </div>
        <div class="register-form" :class="{ invalid: !lastname.isValid }">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" v-model.trim="lastname.val" @blur="setValid('lastname')">
            <p v-if="!lastname.isValid" class="danger-text">Input characters</p>
        </div>
        <div class="register-form" :class="{ invalid: !areas.isValid }">
            <h3 class="text-xl font-semibold">Areas of expertise</h3>
            <div class=" space-x-3">
                <input type="checkbox" id="frontend" value="frontend" v-model.trim="areas.val" @blur="setValid('areas')">
                <label for="frontend">Frontend</label>
            </div>
            <div class=" space-x-3" :class="{ invalid: !areas.isValid }">
                <input type="checkbox" id="backend" value="backend" v-model.trim="areas.val" @blur="setValid('areas')">
                <label for="backend">Backend</label>
            </div>
            <div class="space-x-3" :class="{ invalid: !areas.isValid }">
                <input type="checkbox" id="career" value="carrer" v-model.trim="areas.val" @blur="setValid('areas')">
                <label for="career">career</label>
            </div>
            <p v-if="!areas.isValid" class="danger-text">Select at least 1</p>
        </div>
        <div class="register-form" :class="{ invalid: !description.isValid }">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="setValid('description')"></textarea>
            <p v-if="!description.isValid" class="danger-text">At least 20 characters</p>
        </div>
        <div class="register-form" :class="{ invalid: !rate.isValid }">
            <label for="rate">Rate</label>
            <input type="number" id="rate" v-model.number="rate.val" @blur="setValid('rate')">
            <p v-if="!rate.isValid" class="danger-text">Must be greater than 0</p>
        </div>
        <p v-if="!formIsValid" class="danger-text">Please fix errors and submit again</p>
        <base-button>Register</base-button>
    </form>
</template>
<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            firstname: {
                val: '',
                isValid: true,
            },
            lastname: {
                val: '',
                isValid: true,
            },
            description: {
                val: '',
                isValid: true,
            },
            areas: {
                val: [],
                isValid: true,
            },
            rate: {
                val: null,
                isValid: true,
            },
            formIsValid: true
        }
    },
    methods: {
        validateForm() {

            this.formIsValid = true;
            if (!this.firstname.val) {
                this.firstname.isValid = false
                this.formIsValid = false
            }
            if (!this.lastname.val) {
                this.lastname.isValid = false
                this.formIsValid = false
            }
            if (!this.description.val || this.description.val.length < 20) {
                this.description.isValid = false
                this.formIsValid = false
            }
            if (!this.rate.val || this.rate.val < 0) {
                this.rate.isValid = false
                this.formIsValid = false
            }
            if (this.areas.val.length === 0) {
                this.areas.isValid = false
                this.formIsValid = false
            }
        },
        setValid(input) {
            this[input].isValid = true;
        },
        submitForm() {
            this.validateForm()

            if (!this.formIsValid) {
                return;
            }

            const formData = {
                first: this.firstname.val,
                last: this.lastname.val,
                description: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            }
            this.$emit('save-data', formData);
        }
    }
}
</script>