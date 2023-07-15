<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
}
</script>

<style>
.fade-enter-active {
  animation: fade .15s ease-in-out forwards
}

.fade-leave-active {
  animation: fade .15s ease-in-out forwards reverse
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
