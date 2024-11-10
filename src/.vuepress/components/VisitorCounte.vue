<template>
  <div v-if="isVisible" class="visitor-stats">
    <button v-if="!panelVisible" @click="togglePanel" class="toggle-button">访客统计</button>

    <div v-show="panelVisible" class="visitor-stats-panel">
      <button @click="togglePanel" class="close-button">关闭</button>
      <div class="visitor-info">
        <p><strong>IP：</strong>{{ ipAddress }}</p>
        <p><strong>位置：</strong><div class="location-box">{{ location }}</div></p>
        <p><strong>设备：</strong>{{ deviceInfo.os }} - {{ deviceInfo.browser }}</p>
      </div>
      
      <VisitorHistory :history="groupedHistory" />
      
      <ClearHistory :showInput="showPasswordInput" 
                   :error="passwordError" 
                   @clearHistory="clearHistory" 
                   @togglePasswordInput="togglePasswordInput" 
                   @checkPassword="checkPassword" 
                   v-model:password="password" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import VisitorHistory from './VisitorHistory.vue';
import ClearHistory from './ClearHistory.vue';

const isVisible = ref(true);
const panelVisible = ref(false);
const showPasswordInput = ref(false);
const password = ref('');
const passwordError = ref(false);
const correctPassword = '3448585471';
const ipAddress = ref('');
const location = ref('');
const deviceInfo = ref({ os: '', browser: '' });
const visitorHistory = ref([]);
const maxAttempts = 3;
let attemptCount = 0;

const togglePanel = () => {
  panelVisible.value = !panelVisible.value;
};

const togglePasswordInput = () => {
  showPasswordInput.value = !showPasswordInput.value;
};

// 获取访客信息
const getVisitorStats = async () => {
  try {
    const cachedData = JSON.parse(localStorage.getItem('visitor-data'));
    if (cachedData && Date.now() - cachedData.timestamp < 5 * 60 * 1000) {
      ipAddress.value = cachedData.ip;
      location.value = cachedData.location;
      return;
    }

    const response = await fetch('https://ipinfo.io?token=d8fa894c0923e3');
    const data = await response.json();
    ipAddress.value = data.ip;
    location.value = `${data.city}, ${data.country}`;

    localStorage.setItem('visitor-data', JSON.stringify({
      ip: data.ip,
      location: `${data.city}, ${data.country}`,
      timestamp: Date.now(),
    }));

    addVisitorHistory(data.country, data.region);
  } catch (error) {
    console.error('无法获取访客数据:', error);
  }
};

// 获取设备信息
const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let os = '未知';
  if (userAgent.includes('Windows NT')) os = 'Windows';
  else if (userAgent.includes('Mac OS')) os = 'Mac';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('iPhone')) os = 'iOS';
  else if (userAgent.includes('Android')) os = 'Android';

  let browser = '未知';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';

  deviceInfo.value = { os, browser };
};

// 添加访客历史记录
const addVisitorHistory = (country, region) => {
  const history = JSON.parse(localStorage.getItem('visitor-history') || '[]');
  const visitData = {
    time: new Date().toLocaleString(),
    ip: ipAddress.value,
    country: country || '未知',
    region: region || '未知',
  };
  history.push(visitData);
  localStorage.setItem('visitor-history', JSON.stringify(history));
  visitorHistory.value = history;
};

// 按 IP 地址分组历史记录
const groupedHistory = computed(() => {
  const grouped = [];
  visitorHistory.value.forEach(entry => {
    const group = grouped.find(item => item.ip === entry.ip);
    if (group) {
      group.records.push(entry);
    } else {
      grouped.push({ ip: entry.ip, records: [entry] });
    }
  });
  return grouped;
});

// 清除历史记录
const clearHistory = () => {
  localStorage.removeItem('visitor-history');
  visitorHistory.value = [];
  nextTick(() => {
    showPasswordInput.value = false;
    password.value = '';
    passwordError.value = false;
  });
};

// 密码验证
const checkPassword = () => {
  if (attemptCount >= maxAttempts) {
    alert('密码错误次数过多，请稍后重试');
    return;
  }

  if (password.value === correctPassword) {
    clearHistory();
  } else {
    passwordError.value = true;
    attemptCount++;
  }
};

// 初始化函数
onMounted(() => {
  getVisitorStats();
  getDeviceInfo();
  setInterval(getVisitorStats, 5 * 60 * 1000);
});
</script>

<style scoped>
.visitor-stats {
  font-size: 1em;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
}

.toggle-button {
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  margin-bottom: 5px;
}

.close-button {
  font-size: 12px;
  padding: 6px;
  cursor: pointer;
  border: none;
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
}

.visitor-stats-panel {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  transition: all 0.3s ease;
  overflow-y: auto;
  position: relative;
}

.visitor-info {
  font-size: 0.9em;
  margin-bottom: 10px;
}

.visitor-info p {
  margin: 5px 0;
  line-height: 1.3;
}

.visitor-info strong {
  color: #4CAF50;
}

.location-box {
  display: inline-block;
  padding: 6px 12px;
  margin-left: 10px;
  border: 2px solid #4CAF50;
  border-radius: 5px;
  background-color: #f1f8e9;
  color: #4CAF50;
  font-size: 0.85em;
}

.visitor-history {
  margin-top: 10px;
  font-size: 0.8em;
}

.visitor-history h3 {
  font-size: 1em;
  margin-bottom: 5px;
  color: #333;
}

.visitor-history ul {
  list-style: none;
  padding-left: 0;
}

.visitor-history li {
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
}

.history-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.history-item strong {
  font-weight: bold;
  margin-bottom: 5px;
}

.history-item .info-box {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 4px;
  width: 100%;
  border-radius: 5px;
}

.history-item .info-box .time {
  font-size: 0.8em;
  color: #555;
}

.history-item .info-box .location {
  font-size: 0.8em;
  color: #555;
}

.clear-history {
  margin-top: 10px;
}

.clear-button {
  background-color: #f44336;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input {
  padding: 8px;
  margin: 5px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 0.9em;
}
</style>