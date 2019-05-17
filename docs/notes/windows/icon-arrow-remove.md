# 去除图标角标

> 去除 windows 快捷方式图标的角标箭头

## 删除图标

创建 xxx.bat，复制进去运行即可。

```bash
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

代码说明：

1. 删除注册表
2. 重启文件管理器

::: warning 注意

会导致跟实体文件分不清楚，而且用完就回不去了，请谨慎使用。

:::