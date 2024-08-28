<template>
  <a-carousel autoplay>
    <div class="item item-1">
      <img src="https://storage.dev.permate.com/files/1/8/1724822991.5428054/anhbln1.jpg" alt="" srcset="" />
    </div>
    <div class="item item-2">
      <img src="https://storage.dev.permate.com/files/1/8/1724823072.8072002/anhbln2.jpg" alt="" srcset="" />
    </div>
    <div class="item item-3">
      <img src="https://storage.dev.permate.com/files/1/8/1724823109.1849957/anhbln3.jpg" alt="" srcset="" />
    </div>
  </a-carousel>
</template>

<style lang="scss" scoped>
.slick-slide {
  text-align: center;
  line-height: 160px;
  min-height: 160px;
  background: map-get($colors, main);
  overflow: hidden;
}
.item {
  width: 100%;
  min-height: calc(100vh - 6.8rem);
  background: map-get($colors, main);
  img {
    width: 100%;
    height: calc(100vh - 6.8rem);
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    &.item-1 {
      background: map-get($colors, main);
      img {
        object-fit: cover;
      }
    }
    min-height: unset;
    img {
      height: unset;
    }
    .slick-track {
      background: map-get($colors, main);
    }
  }
  @media screen and (max-width: 800px) {
    &.item-1 {
      background: map-get($colors, main);
      img {
        object-fit: cover;
      }
    }
    min-height: 28rem;
    img {
      height: 28rem;
    }
    .slick-track {
      background: map-get($colors, main);
    }
  }
}
</style>
