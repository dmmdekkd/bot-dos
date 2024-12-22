import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/': [
    {
      text: "简介",
      icon: "info-circle",
      link: "/portfolio",
    },
    {
      text: '目录',
      icon: 'list',
      children: [
        { text: 'Yunzai搭建', link: '/yunzai/' },
        { text: '刻晴机器人', link: '/刻晴机器人/' },
      ],
    },    
  ],
  '/yunzai': [
    {
      text: 'Yunzai搭建',
      icon: 'robot',
      collapsible: true,
      children: [
        { text: 'TRSS Yunzai', link: '/yunzai/Yunzai/TRSS/' },
        { text: 'Miao Yunzai', link: '/yunzai/Yunzai/Miao/' },
        { text: 'Yunzai JS', link: '/yunzai/Yunzai/YunzaiJS/' },        
      ],
    },
    {
      text: '解决办法',
      icon: 'search',
      collapsible: true,
      children: [
        { text: '登录教程', link: '/yunzai/解决办法/登录/' },
        { text: '常见问题', link: '/yunzai/解决办法/常见问题/' },
        { text: '遇到问题?', link: '/yunzai/解决办法/问题/' },        
      ],
    },    
    {
      text: '我的插件',
      icon: 'puzzle-piece',
      collapsible: true,
      children: [
        { text: '单JS', link: '/yunzai/我的插件/单js/' },
        { text: 'plugin', link: '/yunzai/我的插件/plugin/' },
      ],
    },    
     {
      text: "Qsign",
      icon: "chart-line",
      link: "/yunzai/qs/",
    },
  ],
  '/刻晴机器人': [
    {
      text: '刻晴机器人',
      icon: 'zap',
      children: [
        { text: '机器人列表', link: '/刻晴机器人/机器人列表/' },
        { text: '机器人功能', link: '/刻晴机器人/机器人功能/' },        
      ],
    },    
  ],    
});