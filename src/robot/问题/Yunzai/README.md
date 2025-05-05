---
title: Yunzai常见问题
icon: 
---

## `ICQQ`[禁止登录]
::: details 错误码:45
::: code-tabs#shell
@tab tsab TRSS-Yunzai
```bash :no-line-numbers
tsab c 'cd $DIR/TRSS-Yunzai && bash <(curl -sSLk Gitee.com/haanxuan/QSign/raw/main/X)'
```
@tab tsab Miao-Yunzai
```bash :no-line-numbers
tsab c 'cd $DIR/Miao-Yunzai && bash <(curl -sSLk Gitee.com/haanxuan/QSign/raw/main/X)'
```
@tab:active bash :no-line-numbers
```bash :no-line-numbers
bash <(curl -sSLk Gitee.com/haanxuan/QSign/raw/main/X)
```
@tab 白狐脚本 Miao-Yunzai
```bash :no-line-numbers
cd /root/Miao-Yunzai && bash <(curl -sSLk Gitee.com/haanxuan/QSign/raw/main/X)
```
@tab 白狐脚本 TRSS-Yunzai
```bash :no-line-numbers
cd /root/TRSS-Yunzai && bash <(curl -sSLk Gitee.com/haanxuan/QSign/raw/main/X)
```
:::

::: details 错误码:235
```
rm -rf data/icqq
```
```云崽根目录执行
node app
```
:::

::: details 错误码:237
出现这个是频繁登录了,等待几个小时或者第二天登录
:::

::: details 登录验证码老是不成功？
用手机流量进行验证
:::

## `puppteer`渲染异常，启动失败
::: details `puppteer`渲染异常，启动失败
```
pnpm install puppeteer
```
```
 pacman -Syu --needed \
  
    nss \
  
    atk \
  
    at-spi2-core \
  
    libxss \
  
    alsa-lib \
  
    libxshmfence \
  
    mesa \
```
:::

## `Redis`错误
::: details `Redis`错误
```TRSSYunzai使用
pacman -Syu Redis
```
```MiaoYunzai使用
apt install redis-server
``` 
:::