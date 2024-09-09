<template>
  <a-carousel autoplay>
    <div v-for="(item, index) in items" :key="'bgr'+index" class="item item-1">
      <img :src="item?.link" alt="" srcset="" />
    </div>
  </a-carousel>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { useCommonsStore } from '@/stores/commons'
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => ([]),
  },
});

</script>
<style lang="scss" scoped>
.slick-slide {
  text-align: center;
  line-height: 160px;
  min-height: 160px;
  background: map-get($colors, main);
  overflow: hidden;
}
.item {
  width: 100%;
  min-height: calc(100vh - 6.8rem);
  background: map-get($colors, main);
  img {
    width: 100%;
    height: calc(100vh - 6.8rem);
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    &.item-1 {
      background: map-get($colors, main);
      img {
        object-fit: cover;
      }
    }
    min-height: unset;
    img {
      height: unset;
    }
    .slick-track {
      background: map-get($colors, main);
    }
  }
  @media screen and (max-width: 800px) {
    &.item-1 {
      background: map-get($colors, main);
      img {
        object-fit: cover;
      }
    }
    min-height: 28rem;
    img {
      height: 28rem;
    }
    .slick-track {
      background: map-get($colors, main);
    }
  }
}
</style>
