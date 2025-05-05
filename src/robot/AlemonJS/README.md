---
title: AlemonJS
icon: robot
---

## 快速开始

:::tip

本文默认你已经了解并熟悉NodeJS编程，

如果你对NodeJS的部署和配置不熟悉，

同时也对JavaScript主流的打包工具不熟悉，

请前往[https://lvyjs.dev](https://lvyjs.dev/)了解

:::
## 初始化
   
::: code-tabs#shell 
@tab npmjs
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g 
```

```sh title="使用模板"
npm create  lvyjs@latest -y
cd alemonjs
yarn install
```
@tab npmmirror
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g --registry=https://registry.npmmirror.com
```

```sh title="使用模板"
npm create  lvyjs@latest -y --registry=https://registry.npmmirror.com
cd alemonjs
yarn install
```
:::
 
## 配置

```yaml title="alemon.config.yaml"
# 基本格式 [配置名]:[配置参数]
gui:
  port: 17127
```

## 启动

> 下载编辑器 [`Visual Studio Code`](https://code.visualstudio.com/)

> 下载编辑器扩展 [`ALemonJS GUI`](https://marketplace.visualstudio.com/items?itemName=lemonade-x.alemonjs-gui)

- 指令启动
::: code-tabs#shell
@tab yarn
```sh title="以开发模式启动，并选择gui"
yarn dev --login gui
```

@tab npm

```sh title="以开发模式启动，并选择gui"
npm run dev login gui
```
:::


```yaml title="可在alemon.config.yaml固定login参数"
login: 'gui'
```
