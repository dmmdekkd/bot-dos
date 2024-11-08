<template>
  <div class="visitor-stats">
    <h2>访客统计</h2>
    <p>欢迎访问！您是本站第 <span>{{ visitorCount }}</span> 位访客。</p>
    <p>您的最后访问时间是：{{ lastVisitTime }}</p>
    <p>您的访问间隔时间是：{{ visitInterval }} 秒</p>
    <p>您的 IP 地址是：{{ ipAddress }}</p>
    <p>您的位置：{{ location }}</p>
    <p>您是从 <a :href="referrer" target="_blank">{{ referrerSource }}</a> 来到本站的。</p>

    <div class="visitor-locations">
      <h3>所有访客位置</h3>
      <ul>
        <li v-for="(location, index) in visitorLocations" :key="index">
          <span>{{ location.city }}, {{ location.country }}</span> - IP: {{ location.ip }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const visitorCount = ref(0);
const lastVisitTime = ref('');
const visitInterval = ref(0);
const ipAddress = ref('');
const location = ref('');
const referrer = ref('');
const referrerSource = ref('');
const visitorLocations = ref([]); // 存储所有访客的位置信息

// 获取设备信息
const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let os = '未知';
  if (userAgent.indexOf('Windows NT 10.0') !== -1) os = 'Windows 10';
  else if (userAgent.indexOf('Windows NT 6.1') !== -1) os = 'Windows 7';
  else if (userAgent.indexOf('Mac OS X') !== -1) os = 'Mac OS';
  else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';

  let browser = '未知';
  if (userAgent.indexOf('Chrome') !== -1) browser = 'Chrome';
  else if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox';
  else if (userAgent.indexOf('Safari') !== -1) browser = 'Safari';

  const screenResolution = `${window.screen.width}x${window.screen.height}`;

  let deviceType = '未知';
  if (/Mobi|Android|iPhone/i.test(userAgent)) {
    deviceType = '移动设备';
  } else if (/Tablet/i.test(userAgent)) {
    deviceType = '平板';
  } else {
    deviceType = '桌面设备';
  }

  let deviceModel = '未知型号';
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    deviceModel = 'Apple Device';
  } else if (/Android/i.test(userAgent)) {
    deviceModel = 'Android Device';
  }
};

// 获取访客来源
const getReferrerSource = () => {
  referrer.value = document.referrer || '直接访问';
  referrerSource.value = referrer.value ? `通过 ${referrer.value} 进入` : '直接访问';
};

// 获取 IP 地址和地理位置
const getVisitorLocation = async () => {
  try {
    const response = await fetch('https://ipinfo.io?token=d8fa894c0923e3');
    const data = await response.json();
    ipAddress.value = data.ip;
    location.value = data.city + ', ' + data.country;

    // 保存访客位置信息
    const visitorLocation = {
      ip: data.ip,
      city: data.city, // 城市
      country: data.country, // 国家
    };
    visitorLocations.value.push(visitorLocation);
    localStorage.setItem('visitorLocations', JSON.stringify(visitorLocations.value));
  } catch (error) {
    console.error('无法获取位置信息', error);
  }
};

// 获取访客统计
const getVisitorStats = () => {
  // 获取访客数量
  const count = parseInt(localStorage.getItem('visitor-count') || '0', 10);
  visitorCount.value = count + 1;
  localStorage.setItem('visitor-count', visitorCount.value);

  // 获取访问时间与间隔
  const lastVisit = localStorage.getItem('last-visit');
  if (lastVisit) {
    const now = new Date().getTime();
    visitInterval.value = Math.floor((now - parseInt(lastVisit)) / 1000);
    lastVisitTime.value = new Date(parseInt(lastVisit)).toLocaleString();
  }
  localStorage.setItem('last-visit', new Date().getTime());
};

// 页面加载时执行
onMounted(async () => {
  // 获取访客来源
  getReferrerSource();

  // 获取 IP 地址和位置
  await getVisitorLocation();

  // 获取访客统计信息
  getVisitorStats();
  
  // 获取设备信息
  getDeviceInfo();
});
</script>

<style scoped>
.visitor-stats {
  font-size: 1.2em;
  margin: 20px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.4em;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

li span {
  color: #333;
  font-weight: bold;
}

a {
  color: #1e90ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>