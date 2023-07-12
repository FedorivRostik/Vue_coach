<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>

export default {
  name: 'App',

}
</script>

<style>
.fade-enter-active {
  animation: fade .3s ease-in-out forwards
}

.fade-leave-active {
  animation: fade .3s ease-in-out forwards reverse
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
