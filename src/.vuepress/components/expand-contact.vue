<template>
  <div class="contact-container">
    <button @click="toggleContact" class="contact-toggle-btn">
      {{ isContactVisible ? '收起联系方式' : '展开联系方式' }}
    </button>

    <div v-show="isContactVisible" class="contact-info">
      <p><strong>邮箱：</strong> example@example.com</p>
      <p><strong>微信：</strong> zlm123456</p>
      <p><strong>电话：</strong> 123-456-7890</p>
      <p><strong>个人网站：</strong> <a href="https://www.zlmx.com" target="_blank">www.zlmx.com</a></p>
      <p><strong>LinkedIn：</strong> <a href="https://www.linkedin.com/in/zlmx" target="_blank">linkedin.com/in/zlmx</a></p>
      <p><strong>Twitter：</strong> <a href="https://twitter.com/zlmx" target="_blank">@zlmx</a></p>
      <p><strong>GitHub：</strong> <a href="https://github.com/zlmx" target="_blank">github.com/zlmx</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isContactVisible = ref(false);

function toggleContact() {
  isContactVisible.value = !isContactVisible.value;
}
</script>

<style scoped>
.contact-container {
  text-align: center;
}

.contact-toggle-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-info {
  font-size: 16px;
  line-height: 1.8;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>