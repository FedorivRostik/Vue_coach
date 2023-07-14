<template>
    <base-wrapper>

        <base-dialog :show="!!error" @close="fixError" title="Error">
            <p>{{ error }}</p>
        </base-dialog>

        <base-card class="space-y-6">
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <section v-else class="space-y-3">
                <header class="flex justify-center align-middle">
                    <h2 class=" text-2xl font-bold">Requests Received</h2>
                </header>
                <ul v-if="hasRequests" class="flex flex-col gap-2">
                    <request-item :email="request.userEmail" :message="request.message" v-for="request in receivedRequests"
                        :key="request.id"></request-item>
                </ul>

                <h3 v-else class="text-center">You heven't received any requests yet!</h3>

            </section>
        </base-card>

    </base-wrapper>
</template>
<script>

import RequestItem from '../../components/requests/RequestItem'
export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    created() {
        this.loadRequests()
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/getRequests']
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        },
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;

            try {
                await this.$store.dispatch('requests/fetchRequests');
            }
            catch (error) {
                this.error = error.message || 'Something went wrong';
            }

            this.isLoading = false;
        },
        fixError() {
            this.error = null;
        }
    }
}
</script>