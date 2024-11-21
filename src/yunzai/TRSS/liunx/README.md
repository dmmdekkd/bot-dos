---
title: liunx
icon: lightbulb
---

## 准备工作
### 购买服务器
[腾讯云](https://cloud.tencent.com)
>腾讯云是腾讯多年技术沉淀的云计算服务平台，提供300+款产品和全栈解决方案，覆盖大数据、计算、人工智能、容器、存储、网络、微信生态等多个领域

[阿里云](https://www.aliyun.com)
>阿里云—阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供云服务器、云数据库、云安全、云存储、企业应用及行业解决方案服务

[华为云](https://activity.huaweicloud.com)
>华为云是华为旗下的云计算服务平台，为各行业客户提供弹性云服务器、对象存储、文字识别、内容分发网络等多种云产品和解决方案

::: warning
当然你也可以选择其他的
:::

### 服务器系统选择
<Card title="本人推荐系统">
  Ubuntu22，Debian 12
</Card>
  
## 开始安装

::: tip
安装中遇到看不懂的回车即可
:::

### 换源

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/main.sh)
   ```
   
### 选择清华源
   
<img src="/images/TRSS/Linux/1/1.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">


### 软件源是否使用 HTTP 协议? [Y]

<img src="/images/TRSS/Linux/1/2.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">


### 是否跳过更新软件包? [Y]

<img src="/images/TRSS/Linux/1/3.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

### 是否清理已下载的软件包缓存? [Y]

<img src="/images/TRSS/Linux/1/4.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

### [完成] 安装完成

<img src="/images/TRSS/Linux/1/5.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

## 安装Docker

### 脚本安装Docker

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
   ```
   
### 是否安装最新版本的 Docker Engine? [Y]

<img src="/images/TRSS/Linux/2/1.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

### 请选择并输入你想使用的 Docker CE 源 [7]

<img src="/images/TRSS/Linux/2/2.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

### 请选择并输入你想使用的 Docker Registry 源 [13]

<img src="/images/TRSS/Linux/2/3.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

### [完成] 安装完成

<img src="/images/TRSS/Linux/2/4.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">

## 安装TRSS容器

### 使用脚本安装

   ::: code-tabs
   @tab 国内推荐

   ```bash
   DKURL=docker.fxxk.dedyn.io bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

   @tab 国外推荐

   ```bash
   bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

   @tab 备用方法

   ```bash
   bash <(curl -L gitee.com/qianzhi11_admin/my-website/raw/master/TRSS_AllBot.sh)
   ```
   @tab 字体安装

   ```bash
   pacman -Syu --noconfirm glibc
   ```   
   
   :::

### 容器安装完成，启动命令

   ```bash
   tsab
   ```

<img src="/images/TRSS/Linux/3/1.png" alt="1" style="border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">


### 如何登录？

无
