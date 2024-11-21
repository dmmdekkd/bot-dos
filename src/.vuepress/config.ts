// vuepress.config.js
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';  // 导入 Oh My Live2D 插件
import { defineUserConfig } from 'vuepress';  // 导入 VuePress 配置方法
import theme from './theme.js';  // 导入主题配置
import { getDirname, path } from "vuepress/utils";  // 导入 VuePress 的工具函数
import { defineConfig } from 'vite';  // 导入 Vite 配置方法

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: '/',  // 配置站点的基础路径
  lang: 'zh-CN',  // 设置站点的语言为简体中文
  title: 'ZLMX',  // 设置站点标题
  description: 'ZLMX的文档',  // 设置站点描述
  theme,

  plugins: [
    // 配置 Oh My Live2D 插件，展示一个动态的 Live2D 模型
    oml2dPlugin({
      models: [
        {
          path: 'https://model.oml2d.com/rem/model.json',  // 模型的路径
          scale: 0.12,  // 设置模型的缩放比例
          position: [-10, 50],  // 设置模型的位置
          stageStyle: {
            width: 350,  // 设置舞台宽度
          },
        }
      ]
    }),
  ],

  shouldPrefetch: false,  // 禁用 PWA 自动预加载

  alias: {
    "@MyComponent": path.resolve(__dirname, "components/MyComponent.vue"),
  },

  themeConfig: {
    revealjs: {
      controls: true,  // 显示控制按钮
      progress: true,  // 显示进度条
      // 其他 Reveal.js 配置项
    }
  },

  // 合并 Vite 配置到 VuePress 配置文件中
  vite: defineConfig({
    optimizeDeps: {
      include: ['vue-leaflet', 'leaflet'],
    },
    resolve: {
      alias: {
        'vue-leaflet': 'vue-leaflet/dist/vue-leaflet.esm.js',  // 确保使用正确的入口文件
      },
    },
  }),
});