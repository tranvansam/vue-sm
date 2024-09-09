<template>
  <div class="main">
    <div class="hero-wrap container">
      <div class="content">
        <div class="info">
          <p class="sub-title">Ảo thuật gia</p>
          <h1 class="title">Bảo Lam</h1>
          <div class="hero-img-wrap hero-mb">
            <iframe
              class="hero-img"
              :width="560"
              :height="315"
              src="https://www.youtube.com/embed/IAUFsrZR1ks?si=tbxpSoJgPqELYp05"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </div>
          <p class="desc description-container">
            <span id="typing-text">
              Xin chào! Tôi là Bảo Lam, một ảo thuật gia với nhiều năm kinh
              nghiệm trong lĩnh vực biểu diễn ảo thuật. Tôi đã trải qua nhiều
              sân khấu và sự kiện khác nhau, từ các buổi biểu diễn nhỏ tới các
              sự kiện lớn hơn. Sự đam mê và tinh thần sáng tạo của tôi luôn được
              thể hiện qua mỗi màn trình diễn, và tôi luôn muốn mang lại trải
              nghiệm độc đáo và thú vị cho khán giả của mình. Hãy để tôi mang
              đến những phút giây kỳ diệu và góp phần làm cho sự kiện của bạn
              trở nên đặc biệt hơn ...
              <a href="#!" class="btn hero-cta" @click.stop="onClickAdd"
                >Xem thêm</a
              >
            </span>
          </p>
        </div>
        <div class="hero-img-wrap">
          <iframe
            class="hero-img"
            :width="560"
            :height="315"
            src="https://www.youtube.com/embed/IAUFsrZR1ks?si=tbxpSoJgPqELYp05"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const onClickAdd = () => {
  trackButtonClick()
  router.push('/store')
}
const trackButtonClick = () => {
  if (typeof window.gtag !== 'undefined') {
    window?.gtag('event', 'click', {
      event_category: 'button',
      event_label: 'Click button add',
    })
  }
}

onMounted(() => {})
</script>
<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/intro.scss"></style>
