<template>
  <div class="list-photo">
    <CardItem
      v-for="photo in photos"
      :key="photo?.id"
      :img="photo?.img"
      :des="photo?.des" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardItem from './CardItem.vue'

const photos = ref([
  { id: 1, img: '/src/assets/images/landscape.jpg', des: 'sam tran van photo' },
  { id: 2, img: '/src/assets/images/portrait.png', des: 'sam tran van photo' },
  { id: 3, img: '/src/assets/images/landscape.jpg', des: 'sam tran van photo' },
  { id: 4, img: '/src/assets/images/portrait.png', des: 'sam tran van photo' },
  { id: 5, img: '/src/assets/images/landscape.jpg', des: 'sam tran van photo' },
  { id: 6, img: '/src/assets/images/landscape.jpg', des: 'sam tran van photo' },
])
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/list-photo.scss"></style>
