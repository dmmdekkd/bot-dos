<template>
  <div class="app">
    <h1>星点签名 API 状态列表</h1>

    <div v-if="loading" class="loading">🌟 正在获取本地签名 API 列表信息，请稍候...</div>

    <div v-if="checkingProvider" class="loading">
      🔍 正在检查：{{ checkingProvider }}，请稍候...
    </div>

    <div v-for="(message, index) in messages" :key="index" class="message-content" :class="{ 'error-message': message.isError }">
      <div v-html="message.content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      checkingProvider: null, // 当前正在检查的提供者
      messages: [],
      signData: {
        "date": "2024-11-21",
        "dmmdekkd": {
          "memo": "无限制免费使用",
          "9090": "https://api.lzqxcd.cn/?key=0852369"
        },
        "zhaodice": {
          "memo": "签名除了(5)都要挂梯子",
          "9055-910-1": "https://qsign.trpgbot.com",
          "9055-910-2": "http://qsign-v3.trpgbot.com",
          "9055-910-3": "https://qsign.chahuyun.cn",
          "9055-910-4": "https://qsign.chahuyun.cn?key=miraibbs",
          "9055-910-5": "https://zyr15r-astralqsign.hf.space"
        },
        "豆花": {
          "memo": "核心服务由豆花提供，这里是负载均衡站由其他人提供，核心服务基于HOOK实现",
          "910": "https://q-sign.wuliya.cn"
        },
        "寒暄": {
          "memo": "暂时停止服务，请查看 QSign.icu 更换服务地址，可通过脚本一键配置",
          "9070": "https://api.qsign.icu/?key=Free"
        }
      }
    };
  },
  methods: {
    displayMessage(content, isError = false) {
      this.messages.push({ content, isError });
    },
    showLoadingMessage(message) {
      this.loading = true;
      this.displayMessage(message);
    },
    async checkLocalApiStatus(providerInfo) {
      const results = [];
      for (const [name, url] of Object.entries(providerInfo)) {
        if (name === 'memo') continue; // Skip memo field
        try {
          const start = Date.now();
          const response = await axios.get(url, { timeout: 5000 });

          const status = response.status === 200 ? "✅ 正常" : "❎ 异常";
          const delay = `${Date.now() - start}ms`;

          results.push(`🔢 序号: ${name}\n📍 版本: ${name}\n✅ 状态: ${status}\n⏱ 延迟: ${delay}\n🔗 地址: ${url}`);
        } catch (error) {
          const reason = error.code === 'ECONNABORTED' ? "超时" : "网络异常";
          results.push(`🔢 序号: ${name}\n📍 版本: ${name}\n❎ 异常 (${reason})\n🔗 地址: ${url}`);
        }
      }
      return results;
    },
    async fetchSignList() {
      try {
        // 显示加载信息
        this.showLoadingMessage("🌟 欢迎使用");

        // 显示初始列表信息
        this.displayMessage("🌐 本地签名 API 列表：");

        const providers = this.signData;
        const updateTime = this.signData.date || "未知";
        let current = 0;

        for (const [provider, providerInfo] of Object.entries(providers)) {
          if (provider === "date") continue; // 跳过日期信息
          current++;

          // 设置当前正在检查的提供者信息
          this.checkingProvider = provider;
          await this.displayProviderInfo(provider, providerInfo);

          // 完成检查后重置正在检查的提供者
          this.checkingProvider = null;
        }

        // 显示数据更新时间
        this.displayMessage(`📅 数据更新于: ${updateTime}`);
        this.loading = false;

      } catch (error) {
        this.loading = false;
        this.displayMessage("❌ 获取签名列表失败，请稍后再试。", true);
      }
    },
    async displayProviderInfo(provider, providerInfo) {
      try {
        // 先显示提供者的说明和名称，接着进行API检查
        const checkResults = await this.checkLocalApiStatus(providerInfo);

        // 在检查完所有API后，显示提供者信息和检查结果
        this.displayMessage(`💡 提供者: ${provider}`);
        if (providerInfo.memo) {
          this.displayMessage(`📝 说明: ${providerInfo.memo}`);
        }
        checkResults.forEach(result => this.displayMessage(result));

      } catch (error) {
        this.displayMessage(`❌ 无法检查提供者 ${provider} 的状态。`, true);
      }
    }
  },
  mounted() {
    this.fetchSignList();
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  overflow-x: hidden;
}

h1 {
  text-align: center;
  color: #333;
}

.message-content {
  margin-bottom: 10px;
  word-wrap: break-word;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #888;
}

button {
  margin-left: 10px;
  padding: 6px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>