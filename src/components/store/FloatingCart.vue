<template>
  <div>
    <a-badge :count="cartItems.length" class="floating-cart-icon">
      <a-button
        shape="circle"
        size="large"
        icon="shopping-cart"
        @click="showCart = true"
      />
    </a-badge>
    <a-drawer
      title="Your Cart"
      placement="right"
      closable
      v-model:visible="showCart"
    >
      <div v-if="cartItems.length > 0">
        <a-list
          item-layout="horizontal"
          :dataSource="cartItems"
          :renderItem="renderCartItem"
        />
        <a-button
          type="danger"
          block
          @click="clearCart"
        >
          Clear Cart
        </a-button>
      </div>
      <div v-else>
        <p>Your cart is empty</p>
      </div>
    </a-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
})

const showCart = ref(false)

const emit = defineEmits(['removeItem', 'clearCart'])

// const renderCartItem = (item)=>{
//     return (
//       <a-list-item>
//         <a-list-item-meta
//           avatar={item.cover}
//           title={item.name}
//           description={item.description}
//         />
//         <a-button type="link" onClick={() => this.removeItem(item)}>
//           Remove
//         </a-button>
//       </a-list-item>
//     );
//   }

const clearCart = () => {
  emit('clearCart')
}
</script>

<style scoped>
.floating-cart-icon {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
