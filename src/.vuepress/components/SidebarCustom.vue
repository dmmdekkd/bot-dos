<template>
  <div class="global-layout">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <h1>网站标题</h1>
      <nav>
        <a href="/">首页</a>
        <a href="/guide/">指南</a>
        <a href="/about/">关于</a>
      </nav>
      <button>登录</button>
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 原生内容 -->
      <slot />

      <!-- 原生侧边栏（可选） -->
      <div class="original-sidebar">
        <slot name="sidebar" />
      </div>
    </div>

    <!-- 固定悬浮按钮 -->
    <div class="fixed-bottom-btn">
      <button>点击我</button>
    </div>

    <!-- 强制插入的全局侧边栏 -->
    <div class="mandatory-sidebar">
      <h3>强制显示的侧边栏</h3>
      <p>无论访问哪个页面都会显示的内容</p>
      <img 
        src="https://via.placeholder.com/150x150"
        alt="固定图片"
        loading="lazy"
        style="max-width: 100%; margin-top: 20px;"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
};
</script>

<style scoped>
.global-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-nav {
  padding: 15px 20px;
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content {
  flex: 1;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  padding: 20px;
}

.original-sidebar {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
}

.fixed-bottom-btn {
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border-radius: 4px;
  z-index: 1000;
}

.mandatory-sidebar {
  position: fixed !important;
  right: 20px !important;
  top: 120px !important;
  width: 300px !important;
  background-color: #fff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
  z-index: 1000 !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  .mandatory-sidebar {
    display: none !important;
  }
}
</style>
