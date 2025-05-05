---
title: Miao Yunzai
icon: robot
---

## 环境准备
> 必要环境 Windows/Linux + Chrome/Chromium/Edge

> 必要环境 Node.js>16.14.0 + Redis>5.0.0

> 推荐环境 Node.js=18.18.2 + Redis>6.0.0

## 安装`Node`
Win前往官网下载即可[Node](https://nodejs.org/zh-cn)
<br />
linux&Ubuntu+Debian
```安装22Node
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - &&\ apt-get install -y nodejs
```
```安装Node
apt install nodejs
```
```换淘宝源
npm config set registry https://registry.npmmirror.com/
```
```安装pnpm
npm install -g pnpm
```
## 安装`Redis`
Win安装[Redis](https://github.com/redis-windows/redis-windows/releases)
<br />
`apt`命令安装
<br />
在`Ubuntu`系统安装`Redis`可以使用以下命令:
```
sudo apt update
sudo apt install redis-server
```
启动`Redis`
```
redis-server
```
查看`redis`是否启动？
```
redis-cli
```
### 克隆项目
> 请根据网络情况选择Github安装或Gitee安装
```使用 Github 
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

```使用Gitee
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```
###  安装依赖
> 外网环境请修改的本地npm配置.npmrc
```直接安装
pnpm install -P
```

### 运行

> 首次运行按提示输入登录

```sh
npm run app
```

### 登录

```sh
npm run login
```

### 托管

```sh
npm run start
```