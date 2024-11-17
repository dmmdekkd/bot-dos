<template>
  <div>
    <!-- Your template content here -->
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, nextTick } from 'vue';

export default {
  name: 'YourComponentName',
  setup() {
    onMounted(() => {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://cloud.umami.is/script.js';
      script.setAttribute('data-website-id', '374482b4-ce4c-47ff-90ff-a20bb1ac5292');

      // 添加脚本到文档头部
      document.head.appendChild(script);

      // 使用nextTick确保DOM更新后执行
      nextTick(() => {
        // 添加自定义事件监听器
        window.addEventListener('umami:log', handleUmamiLog);
      });
    });

    onBeforeUnmount(() => {
      // 移除自定义事件监听器
      window.removeEventListener('umami:log', handleUmamiLog);
    });

    const handleUmamiLog = (event) => {
      // 处理umami日志事件
      console.log(event.detail);
    };

    return {
      // 返回组件需要的响应式数据和方法
    };
  }
};
</script>

<style>
/* Your styles here */
</style>
