# 安装Windows教程

这不是普通的装系统教程，装系统只是小事，装完系统之后如何设置，怎样让你的电脑更好用才是重点。

## 安装前

### 准备

1. [操作系统](https://msdn.itellyou.cn/)
- 推荐选择 **Windows 10 Version 1809**
   - 2016 LTSB 版本过低，新版 Adobe 系列软件全部无法安装
   - 2019 LTSC 不太稳定，时常会有 BUG 出现，比如蓝屏
   - Version 1903 最新版，刚发布（2019-05更新）也不稳定，[我的使用体验](win10-1903.md)。

2. [PE工具箱](http://www.wepe.com.cn/download.html)

3. 准备一个 U盘（大于 8G）

### 操作

1. 用电脑把「微PE工具箱」安装到「U盘」
2. 把准备好的操作系统镜像拷贝进「U盘」

> 如果不懂，网上有很多教程，百度一下，按照顺序操作就可以

## 安装中

设置启动项，修改U盘为第一启动项

> 根据电脑不同，可能进入 BIOS 的按键也不一样，下面提供一张表，仅供参考

| 型号 | 联想 | 华硕 | 其它         |
| ---- | ---- | ---- | ------------ |
| 按键 | F12  | F2   | F2或F12或del |

**说明：考虑到笔记本的特殊性，请在将「Win 键」旁边的「Fn 键」同时按住。**

## 安装后

进入系统后，这才是本教程的主要内容，最好按照顺序执行

### 激活电脑

推荐使用工具 AAct3.9.1.x64

### 更换用户

- 初始用户权限太低，更换为超级用户，并删除初始用户
- 最好给超级用户设置一个**密码**，以便远程控制和局域网文件共享

### 取消开机密码

- `Ctrl+R` 然后输入 `netplwiz`，去掉 √

### 系统设置

> 推荐使用 [Dism++](http://www.chuyu.me/zh-Hans/index.html) 来修改以下设置

- 桌面『此电脑』图标（个性化 -> 更改桌面图标）
- [开启休眠按钮](https://jingyan.baidu.com/article/54b6b9c0fc2d0b2d593b4764.html)
- 调整熄屏、睡眠、休眠时间
- [关闭防火墙](https://jingyan.baidu.com/article/b87fe19e870be4521835682d.html)
- [永久禁用 Windows Defender](https://jingyan.baidu.com/article/c1a3101e639c6ade656deb17.html)
- [禁用系统自动更新](https://jingyan.baidu.com/article/9faa7231e7b78b473c28cbb6.html)（Windows Update）
- 修改通知和底边栏图标
- 在**文件夹选项**中调出文件名后缀
- [任务栏的图标后面**显示文字**](https://jingyan.baidu.com/article/67508eb403b0b29cca1ce4bd.html) 
- [禁用自带输入法](https://jingyan.baidu.com/article/e4511cf39d7c382b855eaf62.html) 
- [去掉安装软件的弹窗](https://jingyan.baidu.com/article/17bd8e52258a8985ab2bb883.html) 
- [关闭 Windows 安全警报](https://jingyan.baidu.com/article/af9f5a2d73296043140a4503.html)  

### [安装软件](https://pan.baidu.com/s/1hAsz-9yxeE9NEFE2TdKA6w)

> 推荐下载软件的地址： https://pc.qq.com

#### 必备软件

- VB、VC --- 用于支持破解软件的库
- 浏览器 --- 推荐使用 [百分浏览器](http://www.centbrowser.cn/) 
- 7-Zip --- 老牌解压软件
- 输入法 --- 看个人喜欢选择
- 右键管家 --- 简化鼠标右键菜单
- QQ 
- 微信
- Listary --- 文件搜索工具，个人认为比 Everything 强大太多（程序员视角）
- WGestures --- 鼠标手势，功能简单，威力强大。
- 桌面日历 --- 不支持 Markdown 是硬伤，其实还很喜欢，奈何不给力，弃了
- Adobe Reader --- 如果不能用 Acrobat ，你没有其它选择
- Office --- 越新越好，请支持正版
- Windows 照片查看器 --- 轻量、优雅。还是微软大法好，除了不能看 gif 
- 迅雷
- 百度网盘
- 网易云音乐 / 酷狗
- 网易邮箱大师 --- 支持多种邮箱
- Potplayer --- 最强，没有之一
- 

**可选**

- Teamviewer --- 远程软件，偶尔用一用
- PP助手 --- 给 iPhone 传文件

#### 编程必备

- Lantern --- 科学上网，言多必失
- Typora --- 必备软件，markdown 爱好者必备
- VS Code --- 轻量的编辑器
- Webstorm --- 内存杀手，强大不解释
- 微信开发者工具 --- 小程序，公众号

####  开发环境

- Git
- Node