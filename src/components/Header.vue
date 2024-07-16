<template>
  <div class="bg-main">
    <div class="container header">
      <a class="logo" href="#">
        <img src="@/assets/img/logo.svg" style="width: 100px" alt="Besnik." />
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
        type: 'groups',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'groups',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: h(
      'a',
      { href: 'https://antdv.com', target: '_blank' },
      'Navigation Four - Link'
    ),
    title: 'Navigation Four - Link',
  },
])
watch(current, (newVal) => {
  console.log('new', newVal[0])
})

const onChangeMenu = (e) => {
  console.log('e', e)
}
</script>
<style scoped lang="scss" src="@/assets/scss/components/header.scss"></style>
