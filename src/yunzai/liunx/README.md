---
title: liunx
icon: lightbulb
---

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=280 height=220 src="//music.163.com/outchain/player?type=0&id=2942403976&auto=1&height=430">
</iframe>

## 购买服务器

选择一个云服务提供商并点击相应按钮：

<div style="display: flex; gap: 10px;">

  <a href="https://cloud.tencent.com" target="_blank">
    <button style="padding: 10px 20px; font-size: 16px; background-color: #0a73ff; color: white; border: none; border-radius: 5px; cursor: pointer;">
      腾讯云
    </button>
  </a>

  <a href="https://www.aliyun.com" target="_blank">
    <button style="padding: 10px 20px; font-size: 16px; background-color: #ff6a00; color: white; border: none; border-radius: 5px; cursor: pointer;">
      阿里云
    </button>
  </a>

  <a href="https://activity.huaweicloud.com" target="_blank">
    <button style="padding: 10px 20px; font-size: 16px; background-color: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">
      华为云
    </button>
  </a>

</div>

## 系统选择

<h2>系统选择</h2>

<p>第二步：选择适合的Linux系统版本。推荐以下两个版本，但您也可以选择其他Linux发行版：</p>

<div style="display: flex; gap: 10px; margin-top: 10px;">

  <button style="padding: 10px 20px; font-size: 16px; background-color: #0078D4; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Ubuntu 22
  </button>

  <button style="padding: 10px 20px; font-size: 16px; background-color: #A80000; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Debian 12
  </button>

  <button style="padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
    其他Linux发行版
  </button>

</div>
  
## 开始安装

### 接下来开始安装

1 换源
```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

2 选择源

- 选择清华源(7)
![1](https://img.vinua.cn/images/IWuJw.jpg)

- 接下来按Y
![2](https://img.vinua.cn/images/IWJM2.jpg)

- 按N更新软件包
![1](https://img.vinua.cn/images/IWZpA.jpg)

- 回车继续
![1](https://img.vinua.cn/images/IWg0R.jpg)

- 按Y清理缓存
![1](https://img.vinua.cn/images/IWhBW.jpg)

- 到这里你已经完成第一步了
![1](https://img.vinua.cn/images/IWsLQ.jpg)

## 安装Docker

1 脚本安装docker

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```
- 按Y安装最新的Docker Engine
![1](https://img.vinua.cn/images/IWnB7.jpg)

- 国内服务器选择清华源(7),国外服务器选择官方源(13)
![1](https://img.vinua.cn/images/IWCLD.jpg)

- 国内服务器选择阿里云成都(13),国外服务器选择官方(28)
![1](https://img.vinua.cn/images/IWYxU.jpg)

- 回车继续
![1](https://img.vinua.cn/images/IWdGL.jpg)

- 还是回车
![1](https://img.vinua.cn/images/IWk4l.jpg)

- 看到这个就证明你安装成功了，可以进行下一步了
![1](https://img.vinua.cn/images/IW8zi.jpg)

## 安装TRSS容器

### 使用脚本安装TRSS容器

1 国外服务器使用脚本
```bash
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
```

2 国内服务器使用脚本
```bash
DKURL=docker.fxxk.dedyn.io bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
```
- 看到这个恭喜你安装成功
![1](https://img.vinua.cn/images/IWoZ1.jpg)


遇到问题？
- [点击解惑](..//wt/README.md)




