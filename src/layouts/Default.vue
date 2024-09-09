<script setup>
import { computed, onMounted, ref } from 'vue'
import { useCommonsStore } from '@/stores/commons'

const useCommonStore = useCommonsStore()
</script>

<template>
  <div>
    <Loading v-if="useCommonStore.isLoading" />
    <Header class="header-pc" />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/layout/default.scss"></style>
