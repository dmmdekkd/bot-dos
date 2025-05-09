import { hopeTheme } from "vuepress-theme-hope"; // 导入 VuePress Hope 主题
import navbar from "./navbar.js"; // 导入自定义导航栏配置
import sidebar from "./sidebar.js"; // 导入自定义侧边栏配置
import { catalogPlugin } from '@vuepress/plugin-catalog'; // 导入目录插件

export default hopeTheme({
  markdown: {
    component: true,
    tabs: true,
    codeTabs: true,
    highlighter: {
      type: "prismjs",   // 使用 Shiki 高亮器
      themes: {
        light: 'gruvbox-light',
        dark: 'xonokai',
      },
    },
  },
  hostname: "https://github.com/dmmdekkd/bot-dos/", // 网站的根网址
  author: {
    name: "",
  },

  repo: "https://github.com/dmmdekkd/bot-dos/", // GitHub 仓库链接
  docsDir: "src", // 文档源码所在目录

  // 导航栏与侧边栏配置
  navbar, // 引用自定义的导航栏配置
  sidebar, // 引用自定义的侧边栏配置

  // 页脚配置，展示版权和备案信息
  footer: `
      <div class="footer">

 <div class="github-badge" style="text-align: center;">
    <span class="badge-subject bg-blueviolet" style="border-radius: 5px;">
      <span class="badge-title"></i></span>
        <img src="https://theme-hope-assets.vuejs.press/logo.svg" 
       style="animation: rotateIcon 2s linear infinite; width: 1em; height: 1em; vertical-align: middle;">
      <a style="color:#fff; border-radius: 5px;" href="https://theme-hope.vuejs.press/zh/" target="_blank">主题使用VuePress Theme Hope</a>
    </span>
  </div>
  
 <div class="github-badge" style="text-align: center;">
    <span class="badge-subject bg-blueviolet" style="border-radius: 5px;">
      <span class="badge-title"></i></span>
        <img src="https://img.vinua.cn/images/PPTmX.png" 
       style="animation: rotateIcon 2s linear infinite; width: 1em; height: 1em; vertical-align: middle;">
      <a style="color:#fff; border-radius: 5px;" href="https://vercel.com/" target="_blank">本站由Vercel托管</a>
    </span>
  </div>              
      

  <div class="social-media">
    <a href="https://m.bilibili.com/space/1234796277?plat_id=1&share_from=space&share_medium=android&share_plat=android&share_session_id=7d101930-7c44-4f21-a88a-27ddae067e54&share_source=COPY&share_tag=s_i&timestamp=1741194302&unique_k=WZttXdv" target="_blank" class="social-icon">
      <i class="fab fa-bilibili"></i>
    </a>
    <a href="https://qm.qq.com/q/V3ZHGWXlSe" target="_blank" class="social-icon">
      <i class="fab fa-qq"></i>
    </a>
    <a href="https://github.com/dmmdekkd" target="_blank" class="social-icon">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://steamcommunity.com/id/3448585471" target="_blank" class="social-icon">
      <i class="fab fa-steam"></i>
    </a>
        <a href="https://t.me/+JlFQsUiUtQ0zYTk1" target="_blank" class="social-icon">
      <i class="fab fa-telegram"></i>
    </a>
    <a href="https://discord.gg/ucGJ6MAT" target="_blank" class="social-icon">
      <i class="fab fa-discord"></i>
    </a>
    <a href="https://x.com/" target="_blank" class="social-icon">
      <i class="fab fa-twitter"></i>
    </a>          
  </div>


 <div class="github-badge" style="text-align: center;">
    <span class="badge-subject bg-blue" style="border-radius: 5px;">
      <span class="badge-title"><i class="fas fa-home" style="animation: rotateIcon 2s linear infinite;"></i></span>
      <a style="color:#fff; border-radius: 5px;" href="/" target="_blank">首页</a>
    </span>
    <span class="badge-subject bg-orange" style="border-radius: 5px;">
      <span class="badge-title"><i class="fas fa-info-circle" style="animation: rotateIcon 2s linear infinite;"></i></span>
      <a style="color:#fff; border-radius: 5px;" href="/关于/" target="_blank">关于</a>
    </span>
    <span class="badge-subject bg-brightgreen" style="border-radius: 5px;">
      <span class="badge-title"><i class="fas fa-share-alt" style="animation: rotateIcon 2s linear infinite;"></i></span>
      <a style="color:#fff; border-radius: 5px;" href="/友情链接/" target="_blank">友情链接</a>
    </span>
  </div>

  <div class="copyright">
    <a href="https://beian.miit.gov.cn/" target="_blank">黔ICP备2025045336号</a>
  </div>
  
<style>
.badge-sut {
  display: inline-flex;
  align-items: center;

  padding: 4px 8px;
  border-radius: 5px;

  font-size: 14px;
  color: #fff;
}

.badge-sut img {
  /* 移除旋转动画 */
  width: 1em;
  height: 1em;
  margin-right: 4px;
  vertical-align: middle;
}
</style>

<span class="badge-sut">
  <img src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png" alt="icon">
  <a href="https://beian.mps.gov.cn/#/query/webSearch?code=52012202006168" target="_blank" style="color: ; text-decoration: none;">
  贵公网安备52012202006168号
  </a>
</span>  
  
  `,
  displayFooter: true, // 启用页脚显示

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"], // 对指定页面启用加密
    },
  },
  
  fullscreen: true,

  // 多语言配置，配置编辑链接
  metaLocales: {
    editLink: "编辑此页", // 设置“编辑此页”的文本
  },

  // 插件配置评论
  plugins: {

    icon: {
      assets: "fontawesome-with-brands", // 使用 FontAwesome 图标库
    },
    '@vuepress/plugin-icon': {}, // 启用图标插件   
    comment: {
      provider: "Waline",
      serverURL: "https://pinglun.sixflowers.icu/", // your server url
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner", "SiteInfo", "FontIcon", "Share", "VisitorCounter"], // 添加 VisitorCounter 组件
    },

    markdown: {
      align: true, // 启用对齐功能
      attrs: true, // 启用属性支持
      component: true, // 启用 Vue 组件支持
      demo: true, // 启用 demo 支持
      image: true, // 启用图像支持
      include: true, // 启用文件包含功能
      mark: true, // 启用标记功能
      plantuml: true, // 启用 PlantUML 支持
      spoiler: true, // 启用折叠内容（spoiler）支持
      stylize: [
        {
          matcher: "Recommended", // 定义匹配规则
          replacer: ({ tag }) => tag === "em" ? { tag: "Badge", attrs: { type: "tip" }, content: "Recommended" } : undefined,
        },
      ],
      sub: true, // 启用下标支持
      sup: true, // 启用上标支持
      codeTabs: true, // 启用代码标签页
      tab: true, // 启用标签页支持
      tasklist: true, // 启用任务列表支持
      vPre: true, // 启用 vPre 处理
      chart: true, // 启用 chart.js 图表
      footnote: true,
      echarts: true, // 启用 echarts 图表

      gfm: true, // 启用 GitHub Flavored Markdown (支持 tex)
      math: true, // 启用 MathJax 完整支持
      mermaid: true, // 启用 Mermaid 图表
      playground: {
        presets: ["ts", "vue"], // 启用 Playground（支持 ts 和 vue）
      },
      vuePlayground: true, // 启用 Vue Playground
      sandpack: true, // 启用 Sandpack Vue3
      tabs: true,
    },
    

    catalog: catalogPlugin({
      // 目录插件选项
    }),   

    copyCode: {
      showInMobile: true, // 在移动设备上显示复制按钮
      locales: {
        "/": {
          copy: "复制喵",  // 默认语言的复制文字
          copied: "已复制喵",  // 默认语言的已复制文字
        },
        "/en/": {
          copy: "Copy",  // 英文语言的复制文字
          copied: "Copied",  // 英文语言的已复制文字
        },
        "/zh/": {
          copy: "复制喵",  // 中文语言的复制文字
          copied: "已复制喵",  // 中文语言的已复制文字
        },
      },
    },

    slimsearch: {
      // 插件选项
    },

  },
});