<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/layout/default.scss"></style>
