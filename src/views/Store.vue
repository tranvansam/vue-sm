<template>
  <div class="container">
    <div class="filter-search-bar">
      <a-select
        v-model="selectedCategory"
        placeholder="Filter by category"
        allow-clear
      >
        <a-select-option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </a-select-option>
      </a-select>
       <a-input-search
        placeholder="Search products..."
        v-model="searchQuery"
        @search="onSearch"
        enter-button
      />
    </div>

    <div class="product-list">
      <div
        class="product-item"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.image" alt="product" class="product-image" />
        <div class="product-info">
          <div class="product-name">{{ product.name }}</div>
          <div class="product-price">{{ formatPrice(product.price) }}</div>
          <div class="product-description">{{ product.description }}</div>
          <a-button>Add to Cart</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Input, Select, Button } from 'ant-design-vue';

const searchQuery = ref('');
const selectedCategory = ref(null);
const categories = ref(['All', 'Electronics', 'Clothing', 'Books', 'Accessories']);

const products = ref([
  { id: 1, name: 'Smartphone', price: 699, description: 'Latest model', image: 'https://via.placeholder.com/200', category: 'Electronics' },
  { id: 2, name: 'T-Shirt', price: 19.99, description: '100% cotton', image: 'https://via.placeholder.com/200', category: 'Clothing' },
  { id: 3, name: 'Book', price: 9.99, description: 'Bestselling novel', image: 'https://via.placeholder.com/200', category: 'Books' },
  { id: 4, name: 'Watch', price: 199.99, description: 'Luxury watch', image: 'https://via.placeholder.com/200', category: 'Accessories' },
  { id: 3, name: 'Book', price: 9.99, description: 'Bestselling novel', image: 'https://via.placeholder.com/200', category: 'Books' },
  { id: 4, name: 'Watch', price: 199.99, description: 'Luxury watch', image: 'https://via.placeholder.com/200', category: 'Accessories' },
]);

const onSearch = () => {
  // Handle search logic here
};

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = selectedCategory.value ? product.category === selectedCategory.value : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;

  .product-item {
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .product-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    .product-info {
      padding: 15px;
      text-align: center;

      .product-name {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #333;
      }

      .product-price {
        font-size: 16px;
        color: #ff4d4f;
        margin-bottom: 12px;
      }

      .product-description {
        font-size: 14px;
        color: #777;
      }

      .ant-btn {
        margin-top: 10px;
        width: 100%;
        background-color: #1890ff;
        color: white;
        border: none;
        transition: background-color 0.3s;

        &:hover {
          background-color: #40a9ff;
        }
      }
    }
  }
}

.filter-search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .ant-input-search {
    width: 300px;
    margin-right: 15px;
  }

  .ant-select {
    width: 200px;
  }
}

</style>
