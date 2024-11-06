import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "portfolio",
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "/yunzai/",
    "/qs/",
    "/guide/",
  ],
});
