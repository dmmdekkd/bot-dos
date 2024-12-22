import { hopeTheme } from "vuepress-theme-hope"; // 导入 VuePress Hope 主题
import navbar from "./navbar.js"; // 导入自定义导航栏配置
import sidebar from "./sidebar.js"; // 导入自定义侧边栏配置
import { catalogPlugin } from '@vuepress/plugin-catalog'; // 导入目录插件
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app", // 网站的根网址
  author: {
    name: "", // 作者信息

  },
  iconAssets: "fontawesome-with-brands", // 使用 FontAwesome 图标库

  repo: "https://github.com/dmmdekkd", // GitHub 仓库链接
  docsDir: "src", // 文档源码所在目录

  // 导航栏与侧边栏配置
  navbar, // 引用自定义的导航栏配置
  sidebar, // 引用自定义的侧边栏配置

  // 页脚配置，展示版权和备案信息
  footer: `
    <div>
      <a href="/">|返回主页|</a><a href="/">|关于我|</a><br>
      <span>Copyright © 2024 Sixflowers </span><br>
      <a href="  " target="_blank">  </a>
    </div>
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

  // 插件配置
  plugins: {
    comment: {
      provider: "Giscus", // 使用 Giscus 评论系统
      repo: "dmmdekkd/vue-pl", // Giscus 的 GitHub 仓库
      repoId: "R_kgDOMzAgBw", // 仓库 ID
      category: "Announcements", // 评论分类
      categoryId: "DIC_kwDOMzAgB84CijKN", // 分类 ID
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner", "SiteInfo", "FontIcon", "Share", "VisitorCounter"], // 添加 VisitorCounter 组件
    },

    mdEnhance: {
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
      flowchart: true, // 启用流程图支持
      gfm: true, // 启用 GitHub Flavored Markdown (支持 tex)
      math: true, // 启用 MathJax 完整支持
      mermaid: true, // 启用 Mermaid 图表
      playground: {
        presets: ["ts", "vue"], // 启用 Playground（支持 ts 和 vue）
      },
      vuePlayground: true, // 启用 Vue Playground
      sandpack: true, // 启用 Sandpack Vue3
    },

    catalog: catalogPlugin({
      // 目录插件选项
    }),

    markdownTab: {
      codeTabs: true,
      tabs: true,
    },    

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

    searchPro: searchProPlugin({
      // 搜索插件选项
            customFields: [
        {
          name: "author",
          getter: (page) => page.frontmatter.author,
          formatter: "作者：$content",
        },
      ],
    }),
  },
});