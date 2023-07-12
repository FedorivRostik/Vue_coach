<template>
    <base-wrapper>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        Coach register
        <router-link to="/coaches/c1/contact">Contact</router-link>
    </base-wrapper>
</template>
<script>
export default {

}
</script>