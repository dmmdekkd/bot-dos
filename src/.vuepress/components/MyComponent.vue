<template>
  <div>
    <h2>API签名列表</h2>
    <p v-if="loading">正在加载签名API列表，请稍候...</p>
    <p v-if="error">{{ error }}</p>
    <div v-if="apiData">
      <h3>签名API列表</h3>
      <div v-for="(providerInfo, provider) in apiData" :key="provider">
        <h4>由 {{ provider }} 提供:</h4>
        <ul>
          <li v-for="(url, key) in providerInfo" :key="key">
            {{ key }}: <a :href="url" target="_blank">{{ url }}</a>
          </li>
        </ul>
      </div>
      <p>数据加载时间: {{ requestTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalApiList",
  data() {
    return {
      apiData: null,
      error: null,
      loading: false,
      requestTime: "",
    };
  },
  methods: {
    async fetchLocalApiList() {
      this.loading = true;
      try {
        // 从 public 目录加载 JSON 文件
        const response = await fetch("/signlist.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.apiData = await response.json();
        this.requestTime = new Date().toLocaleString("zh-CN", { hour12: false });
      } catch (err) {
        console.error(err);
        this.error = "加载签名API列表失败";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchLocalApiList();
  },
};
</script>

<style scoped>
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>