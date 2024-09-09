<template>
  <a-carousel autoplay class="customer-carousel container">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="carousel-item">
      <a-card class="testimonial-card">
        <p class="testimonial-message">{{ testimonial.message }}</p>
        <a-avatar :src="testimonial.avatar" class="testimonial-avatar" />
        <h3 class="testimonial-name">{{ testimonial.name }}</h3>
        <p class="testimonial-title">{{ testimonial.title }}</p>
        <div class="stars">
          <span v-for="star in testimonial.stars" :key="star" class="star"
            >&#9733;</span
          >
        </div>
      </a-card>
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Carousel, Card, Avatar } from 'ant-design-vue'

interface Testimonial {
  message: string
  avatar: string
  name: string
  title: string
  stars: number
}
import { useCommonsStore } from '@/stores/commons'
const useCommonStore = useCommonsStore()
const testimonials = computed(() => {
  return useCommonStore?.dataCommons?.testimonials
})
</script>

<style lang="scss" scoped>
.customer-carousel {
  margin: 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: map-get($colors, main-bg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}

.carousel-item {
  display: flex;
  justify-content: center;
}

.testimonial-card {
  background-color: map-get($colors, main-bg);
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.testimonial-message {
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
}

.testimonial-avatar {
  margin-bottom: 15px;
  border: 3px solid #ff7e5f;
}

.testimonial-name {
  font-weight: bold;
  color: #333;
}

.testimonial-title {
  color: #777;
}

.stars {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .star {
    font-size: 20px;
    color: #ffcc00;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
