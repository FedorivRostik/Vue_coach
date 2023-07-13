<template>
    <base-wrapper>

        <base-card class="space-y-6">
            <header class="flex justify-center align-middle">
                <h2 class=" text-2xl font-bold">Requests Received</h2>
            </header>
            <ul v-if="hasRequests" class="flex flex-col gap-2">
                <request-item :email="request.userEmail" :message="request.message" v-for="request in receivedRequests"
                    :key="request.id"></request-item>
            </ul>
            <h3 v-else>You heven't received any requests yet!</h3>
        </base-card>

    </base-wrapper>
</template>
<script>

import RequestItem from '../../components/requests/RequestItem'
export default {
    components: {
        RequestItem
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/getRequests']
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        },
    }
}
</script>