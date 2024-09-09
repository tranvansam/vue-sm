<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('')
</script>

<template>
  <div class="contact">
    <div class="contact-content container">
      <p class="title">
        Đặt show ngay hôm nay , nhận ngay ưu đãi giảm
        <span class="percent">10%</span>
      </p>
      <div class="form">
        <a-input
          size="large"
          class="custom-input"
          v-model:value="value"
          placeholder="Nhập số điện thoại" />
        <a-button size="large" ghost>Đặt show</a-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  padding-top: 3rem;
  padding-bottom: 3rem;
  &-content {
    background: linear-gradient(to right, red, #bb1637);
    padding: 3rem 1rem;
    border-radius: 1rem;
    .title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: 500;
      color: white;
      .percent {
        color: white;
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
