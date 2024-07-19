<template>
  <div class="shopping-app">
    <a-layout class="layout">
      <!-- Menu bên phải -->
      <a-layout-sider class="sider" width="250px">
        <a-menu mode="inline" :default-selected-keys="[selectedCategory]" @select="handleCategorySelect">
          <a-menu-item v-for="category in categories" :key="category.id">{{ category.name }}</a-menu-item>
        </a-menu>
      </a-layout-sider>

      <!-- Nội dung chính bên trái -->
      <a-layout-content class="content">
        <a-list
          bordered
          item-layout="horizontal"
          :dataSource="products"
          :renderItem="(product) => ({
            slots: { title: 'title', default: 'description' },
            scopedSlots: { extra: 'extra' },
          })"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Layout, Menu, List } from 'ant-design-vue';

const { Sider, Content } = Layout;
const { MenuItem } = Menu;
const { Item } = List;

const selectedCategory = ref('1'); // Default selected category id

const categories = reactive([
  { id: '1', name: 'Điện thoại' },
  { id: '2', name: 'Máy tính bảng' },
  { id: '3', name: 'Laptop' },
]);

const products = reactive([
  { title: 'iPhone 12', description: 'Smartphone from Apple', id: '1' },
  { title: 'Samsung Galaxy Tab S7', description: 'Tablet from Samsung', id: '2' },
  { title: 'MacBook Pro', description: 'Laptop from Apple', id: '3' },
]);

const handleCategorySelect = ({ key  }: { key: string }) => {
  selectedCategory.value = key;
};
</script>

<style  scoped>
.layout {
  min-height: calc(100vh - 6.8rem);
}

.sider {
  background: #fff;
}

.content {
  padding: 24px;
}

a-list {
  max-width: 600px;
  margin: 0 auto;
}
</style>
