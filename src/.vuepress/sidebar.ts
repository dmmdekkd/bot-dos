import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/': [
    {
      text: '目录',
      icon: 'list',
      children: [
        { text: '机器人框架', link: '/robot/' },
        { text: '刻晴机器人', link: '/刻晴机器人/' },
      ],
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
    
  '/robot': [
    {
      text: '机器人框架',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: '教程', link: '/robot/README.md' },
        { text: '插件', link: '/robot/plugin/' },         { text: '常见问题', link: '/robot/问题/' }, 
        { text: 'icqq签名', link: '/robot/icqq/' },                           
      ],
    },    
  ], 
  
  '/robot/Yunzai': [
    {
      text: "返回机器人框架",
      icon: "info-circle",
      link: "/robot/",
    },  
    {
      text: '机器人框架',
      icon: 'zap',
      collapsible: true,      
      children: [
        { text: 'TRSS-Yunzai', link: '/robot/Yunzai/TRSS/' },
        { text: 'Miao-Yunzai', link: '/robot/Yunzai/Miao/' },        
        { text: 'YunzaiJS', link: '/robot/Yunzai/YunzaiJS/' },                
      ],
    },    
  ], 
  
  '/robot/问题': [
    {
      text: "返回机器人框架",
      icon: "info-circle",
      link: "/robot/",
    },    
    {
      text: '常见问题',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: 'Yunzai常见问题', link: '/robot/问题/Yunzai/' }, 
        { text: 'AlemonJS常见问题', link: '/robot/问题/AlemonJS/' },          
      ],
    },    
  ],           
             
  '/robot/plugin': [
    {
      text: "返回机器人框架",
      icon: "info-circle",
      link: "/robot/",
    },    
    {
      text: '插件',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: 'Yunzai插件', link: '/robot/plugin/Yunzai/' }, 
        { text: 'AlemonJS插件', link: '/robot/plugin/AlemonJS/' },          
      ],
    },    
  ],           
                     
});