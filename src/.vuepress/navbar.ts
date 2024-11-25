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
    text: "YZ搭建",
    icon: "robot",
    link: "/yunzai/目录.md",
  },  
  {
    text: "Qsign",
    icon: "chart-line",
    link: "/yunzai/qs/",
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
    text: "访客统计",
    icon: "globe",
    link: "https://status.yunzai-bot.cn/share/EnRtewSV2otz7pZ5/yunzai-bot.cn",
  },
]);