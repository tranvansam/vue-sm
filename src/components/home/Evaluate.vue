<template>
  <!-- Clients -->
  <div>
    <div id="danh-gia" class="clients container">
        <div class="row">
          <!-- Logo -->
          <!-- <img src="~/assets/img/logo.svg" alt="Besnik." /> -->
          <span class="title-review">Đánh giá khách hàng về Bảo Lam</span>
          <!-- Stars -->
          <div class="stars">
            <img src="@/assets/img/star.svg" alt="Star" />
            <img src="@/assets/img/star.svg" alt="Star" />
            <img src="@/assets/img/star.svg" alt="Star" />
            <img src="@/assets/img/star.svg" alt="Star" />
            <img src="@/assets/img/star.svg" alt="Star" />
          </div>
        </div>
        <div class="row row-desc">
          <p class="desc">Hơn 10,000+ khách hàng đã tin tưởng</p>
          <p class="desc hide-on-mobile">Xếp hạng 5 sao (2k+ Đánh giá)</p>
        </div>
        <SliderPreview class="images" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/home/evaluate.scss"></style>