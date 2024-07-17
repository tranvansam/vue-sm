<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const backHome = () => {
  trackButtonClick()
  router.push('/')
}
const trackButtonClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window?.gtag('event', 'click', {
        event_category: 'button',
        event_label: 'Click button home',
      })
    }
  }
</script>

<template>
  <div class="home">
    store
    <button @click="backHome">BackHome</button>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/views/home.scss"></style>
