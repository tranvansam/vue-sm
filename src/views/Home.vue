<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ENDPOINT } from '@/utils/endpoint'
import { useCommonsStore } from '@/stores/commons'

// State để lưu dữ liệu từ API
const apiData = ref(null as any)
const error = ref(null as any)
const useCommonStore = useCommonsStore()

// Hàm gọi API
const fetchData = async () => {
  try {
    useCommonStore.setLoading(true)
    const response = await axios.get(ENDPOINT.main)
    apiData.value = response.data
    useCommonStore.setData(response.data)
    useCommonStore.setLoading(false)
  } catch (err) {
    error.value = 'Đã xảy ra lỗi khi gọi API'
    useCommonStore.setLoading(false)
  } finally {
  }
}

// Gọi API khi trang được tải lần đầu
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="home">
    <Carousel :items="apiData?.background"/>
    <Intro />
    <ImageShow />
    <ListNew />
    <Posts />
    <Service />
    <Evaluate />
    <DanhGia />
    <Contact />
    <div style="padding: 30px 10px">
      <Map />
    </div>
    <Phone />
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/views/home.scss"></style>
