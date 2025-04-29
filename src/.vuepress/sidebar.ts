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
      text: 'TRSS Yunzai',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: 'Linux', link: '/robot/Yunzai/TRSS/linux/' },
        { text: 'Windows&MYSY2', link: '/robot/Yunzai/TRSS/Windows&MYSY2/' },       
        { text: 'QQBOT适配器', link: '/robot/适配器/QQbot/' },        
        { text: 'ICQQ适配器', link: '/robot/适配器/ICQQ/' },                
      ],
    },  
    {
      text: '喵喵 Yunzai',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: 'Miao', link: '/robot/Yunzai/Miao/' },           
      ],
    },  
    {
      text: 'YunzaiJS',
      icon: 'robot',
      collapsible: true,      
      children: [   
        { text: 'YunzaiJS', link: '/robot/Yunzai/YunzaiJS/' }, 
      ],
    },  
    {
      text: 'AlemonJS',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: 'AlemonJS', link: '/robot/AlemonJS/' },
             
      ],
    },  
    {
      text: '其他',
      icon: 'robot',
      collapsible: true,      
      children: [
        { text: '插件', link: '/robot/plugin/' },      
        { text: '常见问题', link: '/robot/问题/' }, 
        { text: 'ICQQ签名', link: '/robot/icqq/' },                           
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