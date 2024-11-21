// .vuepress/config.js

import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "house",
    link: "/",
  },
  {
    text: "简介",
    icon: "user",
    link: "/portfolio",
  },
  {
    text: "目录",
    icon: "list",
    link: "目录.md",
  },
  {
    text: "服务统计",
    icon: "chart-line",
    link: "/yunzai/qs/",
  },
  {
    text: "YZ全系列搭建教程",
    icon: "robot",
    link: "/yunzai/目录.md",
  },
  {
    text: "link",
    icon: "external-link-alt",
    link: "/guide/",
  },
  {
    text: "友情链接",
    icon: "handshake",
    link: "/yl/",
  },
  {
    text: "监控网站",
    icon: "globe",
    link: "https://yunzai-lls.cn/",
  },
  {
    text: "访客统计",
    icon: "chart-bar",
    link: "/visitor-counter",  // 这里用一个链接来显示组件
  },
]);