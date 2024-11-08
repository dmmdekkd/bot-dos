<template>
  <div class="contact-container">
    <!-- 搜索框 -->
    <input type="text" v-model="searchQuery" placeholder="搜索联系人..." class="search-input">
    <button @click="clearSearch" class="clear-btn">清除搜索</button>

    <!-- 导出功能 -->
    <button @click="exportToCSV" class="export-btn">导出CSV</button>

    <!-- 联系人分类 -->
    <div v-if="isContactVisible">
      <div v-for="(category, index) in filteredContactMethods" :key="index" class="category-section">
        <div class="category-header">
          <h3>{{ category.name }}</h3>
          <button @click="toggleCategory(index)" class="toggle-btn">
            {{ expandedCategory === index ? '收起' : '展开' }}
          </button>
        </div>

        <!-- 展开内容 -->
        <transition name="slide-fade">
          <div v-show="expandedCategory === index" class="contact-list">
            <div v-for="(item, idx) in category.items" :key="idx" class="contact-item">
              <span>{{ item.name }}: {{ item.value }}</span>

              <!-- 星星评分功能 -->
              <div class="rating">
                <span>评分：</span>
                <div class="star-rating">
                  <span 
                    v-for="star in 5" 
                    :key="star"
                    :class="{'filled': item.rating >= star}"
                    @click="setRating(item, star)"
                    class="star"
                  >&#9733;</span>
                </div>
              </div>
              <div class="rating-display">
                <span>当前评分: {{ item.rating || '未评分' }}</span>
              </div>

              <button @click="copyToClipboard(item.value, item.name)" class="copy-btn">
                {{ isCopying[item.name] ? '正在复制...' : '复制' }}
              </button>
              <span v-if="copyStatus[item.name]" :class="copyStatus[item.name] ? 'copy-success' : 'copy-fail'">
                {{ copyStatus[item.name] ? '复制成功！' : '复制失败，请重试！' }}
              </span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const isContactVisible = ref(true);
const searchQuery = ref('');
const expandedCategory = ref(null);
const contactMethods = ref({
  工作信息: [
    { name: '公司', value: '某公司', rating: 4 },
    { name: '职位', value: '前端开发工程师', rating: 5 },
    { name: '电话', value: '123-456-7890', rating: 3 },
    { name: '邮箱', value: 'work@example.com', rating: 4 },
    { name: '办公地址', value: '某大厦', rating: 5 },
    { name: '网址', value: 'https://www.company.com', rating: 4 },
  ],
  社交媒体: [
    { name: 'LinkedIn', value: 'https://www.linkedin.com/in/zlmx', rating: 4 },
    { name: 'Twitter', value: 'https://twitter.com/zlmx', rating: 5 },
    { name: 'GitHub', value: 'https://github.com/zlmx', rating: 4 },
    { name: 'Instagram', value: 'https://instagram.com/zlmx', rating: 3 },
    { name: '微信', value: 'zlm123456', rating: 4 },
  ],
  个人信息: [
    { name: '姓名', value: '张三', rating: 5 },
    { name: '年龄', value: '30', rating: 4 },
    { name: '个人网站', value: 'https://www.zlmx.com', rating: 5 },
  ],
  兴趣爱好: [
    { name: '编程', value: '开发开源项目', rating: 4 },
    { name: '音乐', value: '吉他', rating: 5 },
    { name: '运动', value: '篮球', rating: 3 },
  ],
});

// 状态管理
const copyStatus = ref({});
const isCopying = ref({});

// 搜索功能
const filteredContactMethods = computed(() => {
  const filtered = [];
  for (const category in contactMethods.value) {
    const items = contactMethods.value[category].filter((item) =>
      item.name.includes(searchQuery.value) || item.value.includes(searchQuery.value)
    );
    if (items.length > 0) {
      filtered.push({ name: category, items });
    }
  }
  return filtered;
});

// 展开/折叠分类
function toggleCategory(index) {
  expandedCategory.value = expandedCategory.value === index ? null : index;
}

// 复制到剪切板
function copyToClipboard(value, name) {
  isCopying.value[name] = true;
  navigator.clipboard.writeText(value).then(() => {
    copyStatus.value[name] = true;
    isCopying.value[name] = false;
    setTimeout(() => {
      copyStatus.value[name] = null;
    }, 3000);
  }).catch(() => {
    copyStatus.value[name] = false;
    isCopying.value[name] = false;
    setTimeout(() => {
      copyStatus.value[name] = null;
    }, 3000);
  });
}

// 清除搜索框
function clearSearch() {
  searchQuery.value = '';
}

// 导出到CSV
function exportToCSV() {
  const csvContent = [
    '分类, 联系方式, 值',
    ...Object.entries(contactMethods.value).flatMap(([category, items]) =>
      items.map(item => `${category}, ${item.name}, ${item.value}`)
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'contacts.csv';
  link.click();
  URL.revokeObjectURL(link.href);  // 释放 URL
}

// 设置评分
function setRating(item, rating) {
  item.rating = rating;
  saveRatings();
}

// 保存评分数据
function saveRatings() {
  localStorage.setItem('contacts', JSON.stringify(contactMethods.value));
}

// 从本地存储加载评分数据（如果有）
onMounted(() => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    contactMethods.value = JSON.parse(savedContacts);
  }
});
</script>

<style scoped>
.contact-container {
  text-align: center;
  margin: 20px;
}

.search-input, .clear-btn, .export-btn {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.2s ease;
}

.search-input:focus, .clear-btn:hover, .export-btn:hover {
  transform: scale(1.05);
}

.category-section {
  margin-bottom: 20px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.toggle-btn {
  padding: 5px 10px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.toggle-btn:hover {
  background-color: #ddd;
}

.contact-list {
  margin-top: 10px;
}

.contact-item {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: scale(1.03);
}

.copy-btn {
  padding: 5px 10px;
  background-color: #f5f5f5;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s;
}

.copy-btn:hover {
  transform: scale(1.05);
}

.copy-status {
  margin-left: 10px;
  font-size: 14px;
}

.copy-success {
  color: #4CAF50;  /* Green for success */
}

.copy-fail {
  color: #f44336;  /* Red for failure */
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.rating {
  margin-top: 10px;
}

.star-rating {
  display: inline-block;
}
</style>