<template>
  <div class="loading-container">
    <a-spin size="large" />
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 100;
  background-color: rgb(33, 34, 34);
  opacity: 0.7;
}
</style>
