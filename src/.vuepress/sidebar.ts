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
      text: "YZ搭建",
      icon: "cloud-upload-alt",
      link: "/yunzai/目录.md",
    },
    {
      text: "Qsign",
      icon: "chart-line",
      link: "/yunzai/qs/",
    },
    {
      text: "Link",
      icon: "external-link-alt",
      link: "/guide/",
    },
  ],
});