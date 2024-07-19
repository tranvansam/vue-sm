<template>
  <div class="container map-container map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7014649481976!2d108.153204975132!3d16.080974239123428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218dab342cd6b%3A0xe7e0a9033086833d!2zMzkgVHLhuqduIMSQw6xuaCBUcmksIEhvw6AgTWluaCwgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1715488059284!5m2!1svi!2s"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="container"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.map {
  margin-top: 60px;
  display: flex;
  &__content {
    max-width: 100%;
  }
}
.map-container {
  padding: 2rem;
  height: 450px;
  padding-bottom: 56.25%; /* 16:9 ratio */
  position: relative;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0; /* Loại bỏ đường viền nếu cần */
}
</style>
