<script setup lang="ts">
import Carousel from './components/Carousel.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="layout">
    <div class="content">
      <Carousel/>
    </div>
    <div class="menu">
      <Menu/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
</style>