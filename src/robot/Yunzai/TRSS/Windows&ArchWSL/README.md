---
title: Windows&ArchWSL
icon: fa-brands fa-windows
---

## 开始
右键开始菜单,选择`终端(管理员)`或`Windows 功能`中：
<br />
启用 适用于`Linux`的`Windows`子系统
```
dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
启用`虚拟机平台`
```
dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
重启设备后，启用`WSL2`
```
wsl --set-default-version 2
```
:::tip
输出以下内容则表示 WSL2 启用成功
```
有关与 WSL 2 的主要区别的信息，请访问 https://aka.ms/wsl2
操作成功完成。
```
:::
更新 WSL2 内核
```
wsl --update
```
启动`Arch.exe`
:::tip
输出以下内容则表示 ArchWSL 安装成功
```
Using: xxx\rootfs.tar.gz
Installing...
Installation complete
Press enter to continue...
```
:::
在`文件资源管理器`中打开`（Win+R 运行）`：
```
\\wsl$\Arch\etc\pacman.d
```
编辑 `pacman.conf`，在文件末尾添加以下内容并保存：
```
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
Server = https://mirrors.aliyun.com/archlinuxcn/$arch
Server = https://mirrors.163.com/archlinux-cn/$arch
Server = https://mirrors.tencent.com/archlinuxcn/$arch
Server = https://repo.archlinuxcn.org/$arch
SigLevel = Never
[arch4edu]
Server = https://mirrors.bfsu.edu.cn/arch4edu/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
Server = https://mirrors.aliyun.com/arch4edu/$arch
Server = https://mirrors.tencent.com/arch4edu/$arch
SigLevel = Never
```
启动 `Arch.exe`
:::tip
输出以下内容则表示 ArchWSL 启动成功
```
[root@xxx Arch]#
```
:::
更新软件包
```sh
pacman -Syy archlinux-keyring && pacman -Syu
```
脚本安装
```bash
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install.sh)
```
启动:运行`Arch.exe`或终端输入`wsl`
### 登录
- [ICQQ](/robot/Yunzai/TRSS/适配器/ICQQ/)
- [QQbot](/robot/Yunzai/TRSS/适配器/QQbot/)
- [WeChat](/robot/Yunzai/TRSS/适配器/WeChat/)
- [Telegram](/robot/Yunzai/TRSS/适配器/Telegram/)
- [KOOK](/robot/Yunzai/TRSS/适配器/KOOK/)
- [Discord](/robot/Yunzai/TRSS/适配器/Discord/)