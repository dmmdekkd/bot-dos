---
title: liunx
icon: lightbulb
---

## 购买服务器
<LinkCard title="腾讯云" href="https://cloud.tencent.com" description="腾讯云是腾讯多年技术沉淀的云计算服务平台，提供300+款产品和全栈解决方案，覆盖大数据、计算、人工智能、容器、存储、网络、微信生态等多个领域" />

<LinkCard title="阿里云" href="https://www.aliyun.com" description="阿里云—阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供云服务器、云数据库、云安全、云存储、企业应用及行业解决方案服务" />

<LinkCard title="华为云" href="https://activity.huaweicloud.com" description="华为云是华为旗下的云计算服务平台，为各行业客户提供弹性云服务器、对象存储、文字识别、内容分发网络等多种云产品和解决方案" />

::: warning
当然你也可以选择其他的
:::

## 系统选择
<Card title="本人推荐系统">
  Ubuntu22，Debian 12
</Card>
  
## 开始安装

::: tip
安装中遇到看不懂的回车即可
:::

:::: steps
1. 步骤 1

   ::: code-tabs
   @tab 换源

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/main.sh)
   ```

   :::

2. 步骤 2
   
   ::: tabs
   @tab 
   选择清华源(6)
   ![1](/images/TRSS/Linux/1/1.png)
   :::

3. 步骤 3

   ::: demo-wrapper title="软件源是否使用 HTTP 协议? [Y]"
   ![1](/images/TRSS/Linux/1/2.png)
   :::

4. 步骤 4

   ::: demo-wrapper title="是否跳过更新软件包? [Y]"
   ![1](/images/TRSS/Linux/1/3.png)
   :::

5. 步骤 6

   ::: demo-wrapper title="是否清理已下载的软件包缓存? [Y]"
   ![1](/images/TRSS/Linux/1/4.png)
   :::

6. 步骤 7

   ::: demo-wrapper title="[完成] 安装完成"
   ![1](/images/TRSS/Linux/1/5.png)
   :::

::::

## 安装Docker

:::: steps
1. 步骤 1

   ::: code-tabs
   @tab 脚本安装Docker

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
   ```

   :::

2. 步骤 2

   ::: demo-wrapper title="是否安装最新版本的 Docker Engine? [Y]"
   ![1](/images/TRSS/Linux/2/1.png)
   :::

3. 步骤 3

   ::: demo-wrapper title="请选择并输入你想使用的 Docker CE 源 [7]"
   ![1](/images/TRSS/Linux/2/2.png)
   :::

4. 步骤 4

   ::: demo-wrapper title="请选择并输入你想使用的 Docker Registry 源 [13]"
   ![1](/images/TRSS/Linux/2/3.png)
   :::

5. 步骤 6

   ::: demo-wrapper title="[完成] 安装完成"
   ![1](/images/TRSS/Linux/2/4.png)
   :::

::::

## 安装TRSS容器

:::: steps
1. 步骤 1

   ::: code-tabs
   @tab 国内推荐

   ```bash
   DKURL=docker.fxxk.dedyn.io bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

   @tab 国外推荐

   ```bash
   bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

   :::

2. 步骤 2

   ::: demo-wrapper title="Docker 容器安装完成，启动命令：tsab"
   ![1](/images/TRSS/Linux/3/1.png)
   :::


