<template>
  <div class="app">
    <h1>星点签名 API 状态列表</h1>

    <div v-if="loading" class="loading">🌟 正在获取本地签名 API 列表信息，请稍候...</div>

    <div v-if="checkingProvider" class="loading">
      🔍 正在检查：{{ checkingProvider }}，请稍候...
    </div>

    <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'error-message': message.isError }">
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
        // Show loading message
        this.showLoadingMessage("🌟 欢迎使用");

        // Display initial list info
        this.displayMessage("🌐 本地签名 API 列表：");

        // 修改这部分代码，直接显示带有复制按钮的内容
        const curlCommand = `curl -sL Gitee.com/haanxuan/QSign/raw/main/ver | bash`;
        const messageContent = `
          📄 提示: ICQQ 版本≤0.6.10的用户请在根目录执行以下脚本添加协议配置：
          <div class="copy-container">
            <pre id="curl-command">${curlCommand}</pre>
        `;
        
        this.displayMessage(messageContent);

        const providers = this.signData;
        const updateTime = this.signData.date || "未知";
        let current = 0;

        for (const [provider, providerInfo] of Object.entries(providers)) {
          if (provider === "date") continue; // Skip date info
          current++;

          // Set checking provider message
          this.checkingProvider = provider;
          await this.displayProviderInfo(provider, providerInfo);

          // Reset checking provider after completion
          this.checkingProvider = null;
        }

        // Display data update time
        this.displayMessage(`📅 数据更新于: ${updateTime}`);
        this.loading = false;

      } catch (error) {
        this.loading = false;
        this.displayMessage("❌ 获取签名列表失败，请稍后再试。", true);
      }
    },
    async displayProviderInfo(provider, providerInfo) {
      try {
        // First, display provider's memo and name after all API checks
        const checkResults = await this.checkLocalApiStatus(providerInfo);

        // After checking all APIs, display provider information and results
        this.displayMessage(`💡 提供者: ${provider}`);
        if (providerInfo.memo) {
          this.displayMessage(`📝 说明: ${providerInfo.memo}`);
        }
        checkResults.forEach(result => this.displayMessage(result));

      } catch (error) {
        this.displayMessage(`❌ 无法检查提供者 ${provider} 的状态。`, true);
      }
    },

    // 复制到剪贴板
    copyToClipboard() {
      const curlCommand = document.getElementById("curl-command").innerText;
      navigator.clipboard.writeText(curlCommand).then(() => {
        alert("命令已复制到剪贴板！");
      }).catch(err => {
        alert("复制失败，请手动复制！");
      });
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

.message {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 200px;
  word-wrap: break-word;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #888;
}

.copy-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  overflow-x: auto;
  max-width: 100%;
  box-sizing: border-box;
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