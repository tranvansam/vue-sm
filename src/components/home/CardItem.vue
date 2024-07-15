<script setup lang="ts">
defineProps<{
  img: string;
  des: string;
}>();
</script>


<template>
  <div class="card-item">
    <img :src="img" alt="photo" class="card-item__photo"/>
    <p class="card-item__description">{{ des }}</p>
  </div>
</template>


<style scoped lang="scss" src="@/assets/scss/components/home/card-item.scss"></style>
