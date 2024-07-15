<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { COMMONS } from './constants'
const route = useRoute()
const layout = computed(() => route.meta.layout || COMMONS.LAYOUT.DEFAULT)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
