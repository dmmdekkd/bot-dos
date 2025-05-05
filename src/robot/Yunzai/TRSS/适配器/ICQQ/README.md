---
title: ICQQ适配器 
icon: fa-brands fa-qq
---

## 安装ICQQ-Plugin
```#
#安装ICQQ-Plugin
```
## 设置签名
#QQ签名[签名服务器地址](/robot/icqq/)
```#
#QQ签名+签名服务器地址
```
## 设置账号
#QQ设置QQ号:密码[留空扫码]:登录设备[12]
:::tip
安卓手机[1]
平板[2]
安卓手表[3]为扫码登陆不需要密码
:::
### 完成滑动验证和设备验证即可登录

## 发送按钮
- 在配置\config\ICQQ.yaml
- 把`button: false`改成`button: direct`
![1](/icqq/10.png)
### 插件示列
```js
import plugin from '../../lib/plugins/plugin.js'

export class example extends plugin {
    constructor() {
        super({
            name: '取消息',
            dsc: '取消息',
            event: 'message',
            priority: 66,
            rule: [
                {
                    reg: '^#fa$',
                    fnc: 'fa'
                }
            ]
        })
    }
    async fa(e) {
        const button = [
            {
                type: 'button',
                data: [
                    [
                        // 第一行
                        {
                            text: '按钮1',
                            clicked_text: '按钮1已点击',
                            link: 'https://example.com/link1'
                        },
                        {
                            text: '按钮2',
                            clicked_text: '按钮2已点击',
                            input: '请输入您的信息',
                            send: true
                        }
                    ],
                    [
                        // 第二行
                        {
                            text: '按钮3',
                            clicked_text: '按钮3已点击',
                            callback: 'callback_data_3'
                        },
                        {
                            text: '按钮4',
                            clicked_text: '按钮4已点击',
                            permission: 'admin' // 仅允许管理员使用
                        }
                    ]
                ]
            }
        ]
        e.reply(button)
    }
}
```