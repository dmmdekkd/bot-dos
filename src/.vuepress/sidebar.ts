import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "简介",
      icon: "info-circle",
      link: "/portfolio",
    },
    {
      text: "目录",
      icon: "list-alt",
      prefix: "demo/",
      link: "目录.md",
      children: "structure",
    },
    {
      text: "TRSS 脚本",
      icon: "cloud-upload-alt",
      link: "/trss/",
    },
    {
      text: "服务统计",
      icon: "chart-line",
      link: "/qs/",
    },
    {
      text: "Link",
      icon: "external-link-alt",
      link: "/guide/",
    },
  ],
});