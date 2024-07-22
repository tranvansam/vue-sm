<template>
  <div class="social-buttons">
    <a
      href="https://www.facebook.com/aothuatgiabaolam"
      target="_blank"
      rel="noopener noreferrer"
      class="social-button facebook">
      <FacebookFilled />
    </a>
    <a
      href="https://zalo.me/0979601292"
      target="_blank"
      rel="noopener noreferrer"
      class="social-button zalo">
      <span :style="{ fontSize: '16px' }">Zalo</span>
    </a>
    <a href="tel:0979601292" class="social-button phone">
      <PhoneOutlined />
    </a>
    <a
      href="https://www.youtube.com/@aothuatgiabaolam8171"
      target="_blank"
      rel="noopener noreferrer"
      class="social-button youtube">
      <YoutubeOutlined />
    </a>
  </div>
</template>

<script setup lang="ts">
import { FacebookFilled , PhoneOutlined , YoutubeOutlined} from '@ant-design/icons-vue'
</script>

<style scoped lang="scss">
.social-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 999;
}

.social-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  position: relative;
  overflow: hidden;
  animation: rippleAnimation 1s infinite;
  transform: scale 0.3s;
  &:hover {
    scale: 1.1;
  }
}
@media (max-width: 768px) {
  .social-button {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
@keyframes rippleAnimation {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 123, 255, 0);
  }
}

.facebook {
  background-color: #3b5998;
}

.zalo {
  background-color: #00af00;
}

.phone {
  background-color: #dc3545;
}

.youtube {
  background-color: #ff0000;
}
</style>
