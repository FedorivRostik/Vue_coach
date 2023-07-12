<template>
    <!-- ! mode can be 'flat' or 'outline' -->
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link :to="to" :class="mode" v-else>
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/',
        }
    }

}
</script>
