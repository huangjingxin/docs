# 批处理的高阶玩法

列举几种批处理的妙用，只要你会用电脑，就能掌握。

## 快速启动多个软件

使用`start`命令，后面添上应用路径即可。比如同时启动三个软件 listary、WGestures、lantern， 代码如下：

```bash
@echo off
start "C:\Program Files\Listary\Listary.exe"
start "C:\Program Files (x86)\WGestures\WGestures.exe"
start "C:\Users\Administrator\AppData\Roaming\Lantern\lantern.exe"
```

新建 `启动.txt`，把上面代码拷贝进去，修改后缀名为 `启动.bat`，双击运行即可。

## 快速关闭多个软件

操作跟上面差不多，把代码放到 `关闭.bat` 中，代码如下：

```bash
@echo off
taskkill /f /im Listary.exe
taskkill /f /im WGestures.exe
taskkill /f /im lantern.exe
```

上面两个有什么用呢？如果你想我一样，喜欢打游戏，那就有用了。启动 LOL 前，需要把所有对游戏有影响的软件关闭，游戏完再重启，如果一个一个点，那将非常麻烦。

## 清空粘贴板

代码放入`清除粘贴板.bat`，代码如下：

```bash
@echo off
mshta vbscript:window.clipboardData.setData("Text","")(window.close)
```

如果你喜欢在桌面点击**刷新**，你就会知道**刷新**下面就是**粘贴**，容易点错。这时候它就有用了。
