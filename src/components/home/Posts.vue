<template>
  <!-- Featured -->
  <div id="thanh-tuu" class="featured">
    <div class="content container">
      <Info />
      <header>
        <div class="row desc">
          <div class="item-tt">
            <SafetyCertificateOutlined class="icon" />
            <p class="text">Ảo thuật gia tiêu biểu tại đà nẵng</p>
          </div>
          <div class="item-tt">
            <SafetyCertificateOutlined class="icon" />
            <p class="text">Á quân Vietnam Got Talent 2016</p>
          </div>
          <div class="item-tt">
            <SafetyCertificateOutlined class="icon" />
            <p class="text">Quán quân tài năng miền trung 2020</p>
          </div>
        </div>
      </header>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { SafetyCertificateOutlined } from '@ant-design/icons-vue'
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/featured.scss"></style>
