<template>
  <div class="carousel-item">
    <div class="image">
      <template v-if="item.media.media_type === 'image'">
        <img :src="item.media.link" :alt="item.title"/>
      </template>

      <template v-else-if="item.media.media_type === 'video'">
        <img
          v-if="!isVideoVisible"
          :src="item.media.firstframe"
          :alt="item.title"
          @click="videoShow"
        />
        <video v-else :src="item.media.link" autoplay />
      </template>
    </div>
    <div class="content">
      <div class="title">{{ item.title }}</div>
      <div v-if="additional.description" class="description" v-html="additional.description" />
      <div v-if="additional.author" class="author">{{ additional.author }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PostTypes } from '../types/PostType';

const props = defineProps<{
  item: PostTypes.Item;
}>();

const isVideoVisible = ref(false);
const videoShow = () => {
  console.log('test');
  isVideoVisible.value = !isVideoVisible.value;
};

const additional = computed(() => {
  const { text } = props.item;

  if (!text.includes('--')) {
    return {
      description: text,
      author: null,
    }
  }

  const split = text.split('--');

  return {
    description: split[0],
    author: split[1],
  };
});

</script>

<style langs="scss" scoped>
.carousel-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.image,
.image img {
  max-width: 100%;
}

.content {
  margin-top: -24px;
  flex: 1;
  padding: 27px 36px;
  background: #fff;
  filter: drop-shadow(0px -3px 10px rgba(0, 0, 0, 0.078));
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.title {
  font: 600 18px/27px 'Poppins', sans-serif;
  color: #080a24;
  text-align: left;
  margin-bottom: 14px;
}

.description {
  font: 400 14px/21px 'Poppins', sans-serif;
  color: #656565;
  text-align: left;
}

.author {
  font: 400 10px/16px 'Poppins', sans-serif;
  color: #656565;
  text-align: left;
  text-transform: capitalize;
  margin-top: 5px;
}

</style>
