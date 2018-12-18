# npm常用命令

## 安装

```bash
# 本地安装
npm install <name>

# 全局安装
npm install -g <name>

# 安装指定版本
npm install --save <name>@<version>
```

## 卸载

```bash
# 本地卸载
npm uninstall <name>

# 全局卸载
npm uninstall -g <name>
```

## 更新

```bash
# 更新本地包
npm update <name>

# 更新全局包
npm update -g <name>

# 更新所有包
npm update node_modules
```

## 查看版本

```bash
# 只查看版本（服务器版本）
npm view <name> version

# 只查看版本（本地版本）
npm ls <name>
npm ls <name> -g

# 查看所有已安装的包
npm ls -g --depth 0

# 查看所有版本
npm info <name>
```



