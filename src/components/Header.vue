<template>
  <div class="bg-main">
    <div class="container header">
      <a class="logo" href="#">
        <img src="@/assets/img/nenbl.png" class="img-bl" alt="Besnik." />
        <img
          src="@/assets/img/logo.svg"
          class="img-logo"
          style="width: 155px"
          alt="Besnik." />
      </a>
      <div class="menu">
        <a-menu
          class="menu-custom"
          v-model:selectedKeys="current"
          @select="onChangeMenu"
          mode="horizontal"
          :items="items" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import {
  ShopOutlined,
  HomeOutlined,
  GlobalOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { watch } from 'vue'
import { log } from 'console'
const current = ref<string[]>(['mail'])
const items = ref<any>([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: 'Trang chủ',
    link: '',
    title: 'Trang chủ',
  },
  {
    key: 'client',
    icon: () => h(AppstoreOutlined),
    class:'sam',
    label: 'Đánh giá khách hàng',
    title: 'Đánh giá khách hàng',
  },
  {
    key: 'service',
    icon: () => h(GlobalOutlined),
    label: 'Dịch vụ',
    title: 'Dịch vụ',
    children: [
      {
        type: 'group',
        label: 'Biểu diễn ảo thuật',
        children: [
          {
            label: 'Biểu diễn ảo thuật cận cẩn',
            key: 'setting:1',
          },
          {
            label: 'Biểu diễn ảo thuật sân khấu',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Chú hề bong bóng',
        children: [
          {
            label: 'Chú hề hoạt náo',
            key: 'setting:3',
          },
          {
            label: 'Chú hề kết hợp bóng bóng',
            key: 'setting:4',
          },
        ],
      },
      {
        type: 'groups',
        label: 'Dạy ảo thuật',
        key: 'setting:3',
      },
    ],
  },
  {
    key: 'cuahang',
    label: 'Cửa hàng',
    icon: () => h(ShopOutlined),
    children: [
      {
        type: 'groups',
        label: 'Dụng cụ ảo thuật tại bàn',
      },
      {
        type: 'groups',
        label: 'Dụng cụ ảo thuật sân khấu',
      },
    ],
  },
  {
    key: 'lienhe',
    // label: 'liên hệ',
    label: h(
      'a-button',
      {type : "primary" , class:"btn-login"},
      'Đăng nhập / Đăng ký'
    ),
  },
])
watch(current, (newVal) => {
  console.log('new', newVal[0])
})

const onChangeMenu = (e: any) => {
  console.log('e', e)
}
</script>
<style scoped lang="scss" src="@/assets/scss/components/header.scss"></style>
