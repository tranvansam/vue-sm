<template>
  <a-carousel autoplay>
    <div class="item item-1">
      <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/452258505_122124351368322748_1055843636448258142_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EIGvMks1dxwQ7kNvgHGz-Mi&_nc_ht=scontent.fdad3-5.fna&cb_e2o_trans=q&oh=00_AYCMm64HGVQKHza6BaCrixDlS-OID0EweKOv9_6fXZQJSA&oe=66A36EB9" alt="" srcset="" />
    </div>
    <div class="item item-2">
      <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/452393434_122124351398322748_5126949292374160442_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6qJFxtLicsUQ7kNvgFQEXzc&_nc_ht=scontent.fdad3-1.fna&cb_e2o_trans=q&oh=00_AYByq_bhkyMgXYWZJyIzX-84arMJrQu0LCwKgHIMaU2NJQ&oe=66A370EC" alt="" srcset="" />
    </div>
    <div class="item item-3">
      <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/452435873_122124351434322748_8394566310574280076_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fe3h64gG1YEQ7kNvgEJN17E&_nc_ht=scontent.fdad3-1.fna&cb_e2o_trans=q&oh=00_AYCJZq358SMaDvrKuLBCXb1xVKMrxNtQh3-aYDyRI6CJ3g&oe=66A38B67" alt="" srcset="" />
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
