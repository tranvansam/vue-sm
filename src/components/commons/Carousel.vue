<template>
  <a-carousel autoplay>
    <div class="item item-1">
      <img src="@/assets/img/DayHoc.jpg" alt="" srcset="" />
    </div>
    <div class="item item-2">
      <img src="@/assets/img/bieudien.jpg" alt="" srcset="" />
    </div>
    <div class="item item-3">
      <img src="@/assets/img/chuhe.jpg" alt="" srcset="" />
    </div>
  </a-carousel>
</template>

<style lang="scss" scoped>
::v-deep {
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
    &.item-1 {
      background: #a40116;
      img {
        object-fit: contain;
      }
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
}
</style>
