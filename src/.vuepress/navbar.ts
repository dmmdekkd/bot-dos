// .vuepress/config.js

import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "house",
    link: "/",
  },

  {
    text: "机器人框架",
    icon: "robot",
    link: "/robot/",
  },  
  {
    text: "刻晴机器人",
    icon: "zap",
    link: "/刻晴机器人/",
  },
  
  {
    text: "访客统计",
    icon: "globe",
    link: "https://status.yunzai-bot.cn/share/EnRtewSV2otz7pZ5/yunzai-bot.cn",
  },
]);