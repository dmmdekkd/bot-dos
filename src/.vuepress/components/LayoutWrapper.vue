 
<!-- .vuepress/components/LayoutWrapper.vue -->
<script setup>
import ThemeLayout from 'vuepress-theme-hope/components/Layout.js'

defineProps({
  navbar: Object,
  sidebar: Object
})
</script>

<template>
  <ThemeLayout>
    <template #sidebar>
      <!-- 保留原侧边栏内容 -->
      <component :is="sidebar" />
      
      <!-- 插入广告组件 -->
      <SidebarAd />
    </template>
  </ThemeLayout>
</template>
 