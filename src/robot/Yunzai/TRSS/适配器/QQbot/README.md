---
title: QQbot适配器 
icon: fa-brands fa-qq
---

## 安装QQBot-Plugin
- 发送`#安装QQBot-Plugin`
![1](/qqbot/1.png)
   ```#
   #安装QQBot-Plugin
   ```
## 创建机器人
- 打开[QQ开放平台](https://q.qq.com)
- 点击右上角`立即注册`注册账号
![1](/qqbot/2.png)

- 选择`企业`或`个人`注册
![1](/qqbot/3.png)

- 企业注册步骤
```flow
创建账号
激活邮箱
主体认证
绑定管理员
```
- 个人注册步骤
```flow
创建账号
激活邮箱
绑定管理员
```

- 然后进行创建机器人
## 设置账号
- 进入`机器人管理端`
- 进入`开发设置`
![1](/qqbot/4.png)

- 得到`机器人QQ号`:`机器人ID[AppID]`:`令牌[Token]`:`机器人密钥[AppSecret]`
> #QQBot设置机器人QQ号:AppID:Token:AppSecret:[012]:[01]
::: tip
>[012]
>`0`不是群BOT
>`1`是群BOT
>`2`WebHook

>[01]
>`0`频道公域
>`1`频道私域
:::

## WebSocket登录
### 添加ip白名单
::: tip
测试中的机器人无法设置IP白名单，需要上线机器人后才能设置IP白名单
::: 
![1](/qqbot/5.png)
- 输入
```
#QQBot设置:AppID:Token:AppSecret:1:1
```

## WebHook登录
### 添加ip白名单
::: tip
测试中的机器人无法设置IP白名单，需要上线机器人后才能设置IP白名单
::: 
![1](/qqbot/5.png)
- 输入
```
#QQBot设置:AppID:Token:AppSecret:2
```

### 公网配置
::: tip
需要有公网IP的服务器
::: 
- 安装[宝塔面板](https://www.bt.cn/new/index.html)
进入面板`添加站点`
![1](/qqbot/6.png)
- 选择`反向代理`
![1](/qqbot/7.png)
- 选择`添加反向代理`
![1](/qqbot/8.png)
- 填入目标url`http://IP:2536`
::: tip
需要放行`2536`端口
如需修改为其他端口路径`config/config/server.yaml`
域名需要备案
::: 
- 添加发送域名你自己的域名
然后保存
域名需要开启公网HTTPS
进入SSL-Let's Encrypt-申请证书
选择在发送域名填入的域名
申请成功后进行保存
![1](/qqbot/9.png)
- 进入机器人管理端
在回调配置-请求地址位置填入域名
填入URL/QQBot
::: tip
URL是指在反向代理里添加的域名
::: 

### WebHook转发服务

## 高阶能力
### Markdown 消息
::: tip
Markdown 消息模板主动不需要dau[上行消息人数]现在无法发送任何形式的主动
Markdown 消息模板被动需要2000dau[上行消息人数]
Markdown 原生消息需要10000dau[上行消息人数]
::: 
```#
#QQBotMD + 机器人QQ号:模板ID
```
```需要原生MD按钮权限
#QQBotMD + 机器人QQ号:raw
```
### Button 消息
::: tip
Button 消息可以直接发
Button 原生消息需要10000dau[上行消息人数]
::: 
- 前往[按钮生成网站](https://wiki.kevcore.cn/bot/BUG.html)
- 按钮js插件示列
```js
export class CustomButtonPlugin extends plugin {
    constructor() {
        super({
            name: '按钮',
            dsc: '发送带按钮的消息',
            event: 'message',
            priority: -100,
            rule: [
                {
                    reg: "^#发$",
                    fnc: 'sendButtonMessage'
                }
            ]
        });
    }

    async sendButtonMessage(e) {
        // 创建纯文本消息
        const textMessage = "这是带有按钮的消息";

        // 定义按钮数据
        const buttonData = {
            type: "keyboard",
            id: "102131063_1733621958", // 按钮模板ID
        };

        try {
            // 发送纯文本消息
            await e.reply(textMessage);

            // 发送按钮消息
            await e.reply(segment.raw(buttonData));
        } catch (error) {
            console.error('发送按钮消息出错：', error);
            await e.reply("按钮消息发送失败，请稍后重试。");
        }
    }
}
```
### ARK 消息
::: tip
ARK 消息私域可以直接发
ARK 消息公域需要400dau[上行消息人数]
::: 
- 大图模板示列[PC端不可见]
```js
export class ArkCardPlugin extends plugin {
    constructor() {
        super({
            name: "ARK 卡片插件",
            dsc: "发送 ARK 卡片消息",
            event: "message",
            priority: 50,
            rule: [{ reg: "^(#|/)?大图$", fnc: "sendArkCard" }]
        });
    }

    async sendArkCard(e) {
        const arkMessage = {
            type: "ark",
            template_id: 37,  // 模板 ID
            kv: [
                {
                    "key": "#PROMPT#",
                    "value": "通知提醒"
                  },
                  {
                    "key": "#METATITLE#",
                    "value": "标题"
                  },
                  {
                    "key": "#METASUBTITLE#",
                    "value": "子标题"
                  },
                  {
                    "key": "#METACOVER#",
                    "value": "https://php.yunzaibot.cn/i/2025/03/28/feyyo0.jpg"
                  },
                  {
                    "key": "#METAURL#",
                    "value": "https://php.yunzaibot.cn/i/2025/03/28/feyyo0.jpg"
                },                   
            ]
        };

        // 发送 ARK 消息
        await e.reply(arkMessage);
    }
}
```
- 链接文本列表模板示列[PC端可见]
```js
export class ArkCardPlugin extends plugin {
    constructor() {
        super({
            name: "ARK 卡片插件",
            dsc: "发送 ARK 卡片消息",
            event: "message",
            priority: 50,
            rule: [{ reg: "^(#|/)?链接文本列表$", fnc: "sendArkCard" }]
        });
    }

    async sendArkCard(e) {
        const arkMessage = {
            type: "ark",
            template_id: 23,  // 模板 ID
            kv: [
                {
                    "key": "#DESC#",
                    "value": "descaaaaaa"
                  },
                  {
                    "key": "#PROMPT#",
                    "value": "promptaaaa"
                  },
                  {
                    "key": "#LIST#",
                    "obj": [
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          },
                          {
                            "key": "link",
                            "value": "" //这里填自己的链接[需要设置消息URL]
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          },
                          {
                            "key": "link",
                            "value": "" //这里填自己的链接[需要设置消息URL]
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          },
                          {
                            "key": "link",
                            "value": "" //这里填自己的链接[需要设置消息URL]
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          },
                          {
                            "key": "link",
                            "value": "" //这里填自己的链接[需要设置消息URL]
                          }
                        ]
                      },
                      {
                        "obj_kv": [
                          {
                            "key": "desc",
                            "value": "描述"
                          }
                        ]
                      }
                    ]
                  } 
            ]
        };

        // 发送 ARK 消息
        await e.reply(arkMessage);
    }
}
```
- 文本缩略图[PC端不可见]
```js
export class ArkCardPlugin extends plugin {
    constructor() {
        super({
            name: "ARK 卡片插件",
            dsc: "发送 ARK 卡片消息",
            event: "message",
            priority: 50,
            rule: [{ reg: "^(#|/)?文本缩略图$", fnc: "sendArkCard" }]
        });
    }

    async sendArkCard(e) {
        const arkMessage = {
            type: "ark",
            template_id: 24,  // 模板 ID
            kv: [
                {
                    "key": "#DESC#",
                    "value": "描述"
                  },
                  {
                    "key": "#PROMPT#",
                    "value": "通知信息"
                  },
                  {
                    "key": "#TITLE#",
                    "value": "标题"
                  },
                  {
                    "key": "#METADESC#",
                    "value": "描述"
                  },
                  {
                    "key": "#IMG#",
                    "value": "https://php.yunzaibot.cn/i/2025/03/28/dgw0h6.png"
                  },
                  {
                    "key": "#LINK#",
                    "value": "" //这里填自己的链接[需要设置消息URL]
                  },
                  {
                    "key": "#SUBTITLE#",
                    "value": "子标题"
                  }         
            ]
        };

        // 发送 ARK 消息
        await e.reply(arkMessage);
    }
}
```
- 小程序模板示列[PC端可见]
```js
export class ArkCardPlugin extends plugin {
    constructor() {
        super({
            name: "ARK 卡片插件",
            dsc: "发送 ARK 卡片消息",
            event: "message",
            priority: 50,
            rule: [{ reg: "^(#|/)?小程序$", fnc: "sendArkCard" }]
        });
    }

    async sendArkCard(e) {
        const arkMessage = {
            type: "ark",
            template_id: 34,  // 模板 ID
            kv: [
                {
                    key: "#DESC#",
                    value: "描述"
                },
                {
                    key: "#PROMPT#",
                    value: "描述"
                },
                {
                    key: "#METATITLE#",
                    value: "描述"
                },
                {
                    key: "#METADESC#",
                    value: "描述"
                },
                {
                    key: "#METAICON#",
                    value: ""
                },
                {
                    key: "#METAPREVIEW#",
                    value: ""
                },
                {
                    key: "#METAURL#",
                    value: ""
                }
            ]
        };

        // 发送 ARK 消息
        await e.reply(arkMessage);
    }
}
```