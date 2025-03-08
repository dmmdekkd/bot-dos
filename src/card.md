<div class="horizontal-card-layout">
  <!-- 专业版 - 智能开发套件 -->
  <div class="feature-card">
    <div class="card-header">
      <ColorIcon icon="restfulFastRequest" />机器人框架
    </div>
    <div class="badges">
      <Badge vertical="baseline" color="#FC801D">签名</Badge>
      <Badge vertical="baseline" color="#BF41B6">插件</Badge>
      <Badge vertical="baseline" color="#BFA641">教程</Badge>
      <Badge vertical="baseline" color="#5C41BF">问题解决</Badge>            
    </div>
    <ul class="features">
      ✓ Yunzai<br>
      x AlemonJS<br>
      ✓ 咕咕咕<br>
    </ul>
<div class="doc-sync">
  <a href="robot/">前往</a>
</div>    
  </div>

  <div class="feature-card">
    <div class="card-header">
      <ColorIcon icon="teamwork" />刻晴bot
    </div>
    <div class="badges">
      <Badge vertical="baseline" color="#087CFA">野生</Badge>
      <Badge vertical="baseline" color="#BF41B6">官方</Badge>
      <Badge vertical="baseline" color="#BFA641">稳定</Badge>
      <Badge vertical="baseline" color="#5C41BF">多平台</Badge>      
    </div>
    <ul class="features">
      ✓ 玉衡星刻晴<br>
      ✓ 怎么不带走一只呢<br>
      ✓ 咕咕咕文档中
    </ul>
<div class="doc-sync">
  <a href="刻晴机器人/">前往</a>
</div>    
  </div>

  <div class="feature-card">
    <div class="card-header">
      <ColorIcon icon="organizationalChart" />来博客看看吧
    </div>
    <div class="badges">
      <Badge vertical="baseline" color="#45b787">咕咕咕中</Badge>
    </div>
    <ul class="features">
      ✓ 咕咕咕<br>
      ✓ 咕咕咕<br>
      ✓ 咕咕咕
    </ul>
    <div class="doc-sync">
  <a href="/guide/features/apiDocSync.md">前往</a>
</div>
  </div>

  <div class="feature-card">
    <div class="card-header">
      <ColorIcon icon="basicTools" />基础工具集
    </div>
    <div class="badges">
      <Badge vertical="baseline" color="#07C3F2">免费使用</Badge>
    </div>
    <ul class="features">
      ✓ Postman快速生成<br>
      ✓ CURL命令一键复制<br>
      ✓ 历史请求记录管理
    </ul>
<div class="doc-sync">
  <a href="/guide/features/apiDocSync.md">前往</a>
</div>    
  </div>
</div>

<style>
/* 保持原有样式，移除链接卡片相关CSS */
.horizontal-card-layout {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.feature-card {
  flex: 1 0 22%; /* 保证最小宽度 */
  max-width: 25%;
  margin: 0 5px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  height: 100%;
}

.card-header {
  margin-bottom: 12px;
  font-size: 1.2em;
  color: #2c3e50;
}

.badges {
  margin-bottom: 12px;
}

.features li {
  margin-bottom: 8px;
  line-height: 1.6;
}

/* 响应式适配 */
@media (max-width: 1200px) {
  .feature-card {
    flex: 1 0 28%;
    max-width: 30%;
  }
}

@media (max-width: 768px) {
  .horizontal-card-layout {
    flex-direction: column;
  }
  
  .feature-card {
    flex: 1 0 100%;
    max-width: 100%;
    margin: 15px 0;
  }
}
</style>
