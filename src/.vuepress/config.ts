import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ZLMX",
  description: "vuepress-theme-hope 的文档演示",

  plugins: [
    oml2dPlugin({
      // 在这里配置选项
      models: [
        {
          path: 'https://model.oml2d.com/rem/model.json',
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        }
      ]
    })

    //  ...other plugins
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
