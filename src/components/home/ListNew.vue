<template>
  <!-- Featured -->
  <div id="thanh-tuu" class="featured list-item">
    <div class="container">
      <h2 class="sub-title">Bài Viết Tiêu Biểu</h2>
      <div class="list">
        <div
          v-for="(item, idx) in listPosts"
          :key="idx + 'post A'"
          class="item">
          <a @click.prevent="handleClick(item?.link, idx)">
            <img :src="linkS3(item?.img)" alt="Nikko Apartments" class="thumb" />
          </a>
          <div class="body">
            <h3 class="title">
              <a  @click.prevent="handleClick(item?.link, idx)">{{ item?.title }}</a>
            </h3>
            <p class="desc">
              {{ item?.subContent }}
            </p>
            <div class="info">
              <div>
                <img
                  src="@/assets/img/heart-icon.svg"
                  alt="Nikko Apartments"
                  class="icon"
                  style="width: 15px" />
                <span class="label">{{ item?.like }}</span>
              </div>
              <div>
                <img
                  src="@/assets/img/share-icon.svg"
                  alt="Nikko Apartments"
                  class="icon"
                  style="width: 15px" />
                <span class="label">{{ item?.share }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-action">
        <a-button type="primary" :size="'large'">Xem tất cả bài viết</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SafetyCertificateOutlined } from '@ant-design/icons-vue'

import { useRouter } from 'vue-router'
import { linkS3 } from '@/utils/function'

const router = useRouter()
import { useCommonsStore } from '@/stores/commons'
import { computed } from 'vue'
const useCommonStore = useCommonsStore()
const listPosts = computed(() => {
  return useCommonStore.dataCommons?.posts || []
})

const handleClick = (link: string, id: number) => {
  if (link) {
    window.open(link, '_blank')
  } else {
    router.push({ path: `/detail/${id}` })
  }
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/featured.scss"></style>
