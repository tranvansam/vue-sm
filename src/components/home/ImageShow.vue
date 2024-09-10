<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { computed, ref } from 'vue'
import { linkS3 } from '@/utils/function'

import { useCommonsStore } from '@/stores/commons'
const useCommonStore = useCommonsStore()
const listImages = computed(() => {
  const listImg = useCommonStore.dataCommons.imageShow || []
  return listImg?.map((e: any) => ({
    name: e?.sukien,
    images: e?.anh
      ?.split('cut*')
      .map((i: any) => i.trim())
      .filter(Boolean),
  }))
})
// Swiper Options
const swiperOption = ref({
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: true,
  modules: [Navigation], // Import navigation module
  loop: true,
})

// Format large number for price
const formatLargeNumber = (num: number) => {
  return num.toLocaleString('en-US')
}
</script>

<template>
  <div class="show-img-wrap">
    <h2 class="sub-title">Hình ảnh các sự kiện biểu diễn</h2>
    <div class="grid-container container">
      <div
        v-for="(item, idx) in listImages"
        :key="idx + 'text'"
        class="grid-item">
        <div class="show-image">
          <Swiper v-bind="swiperOption">
            <SwiperSlide
              v-for="(img, index) in item.images"
              :key="index + 'img'"
              class="image">
              <a-image :width="'100%'" :height="'400px'" class="image_url" :src="linkS3(img)" />
            </SwiperSlide>
          </Swiper>
          <p class="show-image__content">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/show-image.scss"></style>
