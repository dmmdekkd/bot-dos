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
    icon: "user-circle",
    link: "/portfolio",
  },
  {
    text: "目录",
    icon: "list",
    link: "目录.md",
  },
  {
    text: "Yunzai搭建",
    icon: "robot",
    link: "/yunzai/目录.md",
  },  
  {
    text: "刻晴机器人",
    icon: "zap",
    link: "/刻晴机器人/",
  },
  {
    text: "友情链接",
    icon: "link",
    link: "/yl/",
  },
  {
    text: "访客统计",
    icon: "globe",
    link: "https://status.yunzai-bot.cn/share/EnRtewSV2otz7pZ5/yunzai-bot.cn",
  },
]);