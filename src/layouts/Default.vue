<script setup>
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <div>
    <Loading v-if="isLoading" />
    <!-- <HearderInfo /> -->
    <Header class="header-pc" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/layout/default.scss"></style>
