<template>
  <div class="header-bg">
    <div class="container header-info">
      <span class="address"> Thành phố đà nanwxg</span>
      <div class="info"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-bg {
  background-color: map-get($colors, new-gray-900);
  color: white;
  .header-info {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
