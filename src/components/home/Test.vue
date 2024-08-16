<script lang="ts" setup>
import { onMounted, ref  } from 'vue'
import axios from 'axios'
const value = ref('')
onMounted(()=>{
         // Lấy token từ URL
    const hash = window.location.hash
    const token = hash.match(/access_token=([^&]*)/)?.[1]

    if (token) {
      // Thực hiện yêu cầu API để lấy thông tin người dùng
      try {
        const response : any =  axios.get(`https://www.tiktok.com/api/v1/user/info/?access_token=${token}`)
        const userLink = response.data.user.link
        console.log('Link người dùng:', userLink)
        // Thực hiện các hành động khác với userLink, ví dụ: lưu vào cơ sở dữ liệu của bạn
      } catch (error) {
        console.error('Lỗi lấy thông tin người dùng:', error)
      }
    }
})
const handleLoginTwitter = async () => {
  try {
        // Thay thế bằng Client Key của bạn
        const clientId = 'sbawxfi8f87j9k8gsk'
        const redirectUri = encodeURIComponent('https://aothuatbaolam.netlify.app')
        const scope = 'user.info.basic'
        const responseType = 'token'

        // URL để người dùng đăng nhập TikTok
        const authUrl = `https://www.tiktok.com/auth/authorize/?client_key=${clientId}&scope=${scope}&response_type=${responseType}&redirect_uri=${redirectUri}`

        // Điều hướng người dùng đến URL đăng nhập TikTok
        window.location.href = authUrl
  } catch (error) {
    console.error('Error during Twitter login:', error)
  }
}
</script>

<template>
  <div class="contact">
    <p>sam</p>
    <button @click="handleLoginTwitter">Login twitter new</button>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  padding-top: 3rem;
  padding-bottom: 3rem;
  &-content {
    background: linear-gradient(to right, #1777ff, #162cbb);
    padding: 3rem 1rem;
    border-radius: 1rem;
    .title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: 500;
      color: white;
      .percent {
        color: red;
      }
    }
    .form {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      .custom-input {
        flex: 1;
      }
    }
  }
}
</style>
