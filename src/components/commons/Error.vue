<template>
  <div class="error-container">
    <h1>Error loading component</h1>
  </div>
</template>

<script>
export default {
  name: 'Error'
};
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: red;
}
</style>
