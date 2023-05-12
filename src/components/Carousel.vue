<template>
  <Carousel class="carousel" @slide-end="handleSlideEnv">
    <Slide v-for="item in items" :key="slide">
      <CarouselItem :item="item" />
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import CarouselItem from './CarouselItem.vue';
import { useAppStore } from '../store/appStore';

const store = useAppStore();

const { items, currentPage, itemsPerPage } = storeToRefs(store);

const handleSlideEnv = (e) => {
  console.log('Current Slide => ', e.currentSlideIndex + 1);
  console.log('Load next on', currentPage.value * itemsPerPage.value - 2);

  if (e.currentSlideIndex + 1 >= currentPage.value * itemsPerPage.value - 2) {
    store.loadData(currentPage.value + 1);
  }
};

onMounted(async () => {
  await store.loadData(1);
});
</script>

<style>
@import 'vue3-carousel/dist/carousel.css';

.carousel {
  width: 100vw;
  height: 100vh;
}

.carousel :deep(.carousel__track) {
  margin: 0;
}
</style>
