<template>
  <div v-if="isVisible" class="visitor-stats">
    <!-- 展开/收起按钮 -->
    <button @click="togglePanel" class="toggle-button">访客统计</button>

    <!-- 访客统计面板 -->
    <div v-show="panelVisible" class="visitor-stats-panel">
      <div class="visitor-info">
        <p>访客IP：{{ ipAddress }}</p>
        <p>位置：{{ location }}</p>
        <p>设备：{{ deviceInfo.os }} - {{ deviceInfo.browser }}</p>
      </div>
      
      <!-- 图表区域 -->
      <div class="visitor-chart">
        <!-- 可以插入Chart.js或其他图表组件 -->
        <canvas id="visitorChart"></canvas>
      </div>

      <!-- 访客历史记录 -->
      <div class="visitor-history">
        <h3>访客历史记录</h3>
        <ul>
          <li v-for="(visit, index) in visitorHistory" :key="index">
            {{ visit.time }} - {{ visit.ip }} - {{ visit.location }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 控制面板的显示与隐藏
const isVisible = ref(true);
const panelVisible = ref(false); // 用于控制面板展开收起

const togglePanel = () => {
  panelVisible.value = !panelVisible.value;
};

// 访客信息
const ipAddress = ref('');
const location = ref('');
const deviceInfo = ref({
  os: '',
  browser: ''
});
const visitorHistory = ref([]);

// 获取访客IP地址和位置信息
const getVisitorStats = async () => {
  try {
    const response = await fetch('https://ipinfo.io?token=d8fa894c0923e3');
    const data = await response.json();
    ipAddress.value = data.ip;
    location.value = data.city + ', ' + data.country;
    addVisitorHistory();
  } catch (error) {
    console.error('无法获取访客数据:', error);
  }
};

// 获取设备信息
const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let os = '未知';
  if (userAgent.indexOf('Windows NT') !== -1) os = 'Windows';
  else if (userAgent.indexOf('Mac OS') !== -1) os = 'Mac';
  else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';

  let browser = '未知';
  if (userAgent.indexOf('Chrome') !== -1) browser = 'Chrome';
  else if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox';

  deviceInfo.value = { os, browser };
};

// 保存访客历史记录
const addVisitorHistory = () => {
  const history = JSON.parse(localStorage.getItem('visitor-history') || '[]');
  const visitData = {
    time: new Date().toLocaleString(),
    ip: ipAddress.value,
    location: location.value,
  };
  history.push(visitData);
  localStorage.setItem('visitor-history', JSON.stringify(history));
  visitorHistory.value = history;
};

// 获取访客统计数据并获取设备信息
onMounted(() => {
  getVisitorStats();
  getDeviceInfo();
  setInterval(() => {
    getVisitorStats();
  }, 300000); // 每5分钟自动刷新访客数据
});
</script>

<style scoped>
.visitor-stats {
  font-size: 1.2em;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
}

.toggle-button {
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.visitor-stats-panel {
  width: 300px;
  min-height: 200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  transition: all 0.3s ease;
}

.visitor-info {
  margin-bottom: 20px;
}

.visitor-info p {
  margin: 10px 0;
}

.visitor-history {
  margin-top: 20px;
}

.visitor-history h3 {
  font-size: 1.1em;
}

.visitor-history ul {
  list-style: none;
  padding-left: 0;
}

.visitor-history li {
  padding: 5px 0;
  font-size: 0.9em;
  border-bottom: 1px solid #ccc;
}

@media (max-width: 768px) {
  .visitor-stats-panel {
    width: 100%;
    min-height: 150px;
  }
}

@media (min-width: 769px) {
  .visitor-stats-panel {
    width: 350px;
    min-height: 200px;
  }
}
</style>