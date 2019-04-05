# 去除图标角标

> 去除 windows 快捷方式图标的角标箭头

创建 xxx.bat，复制进去运行即可。

```bash
cmd /k reg delete "HKEY_CLASSES_ROOT\lnkfile" /v IsShortcut /f & taskkill /f /im explorer.exe & start explorer.exe
```

代码说明：

1. 删除注册表
2. 重启文件管理器