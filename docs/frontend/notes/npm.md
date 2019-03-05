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

# 更新自身
npm install -g npm
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

## 更换镜像

```bash
# 修改设置，默认是 https://registry.npmjs.org （需要科学上网）
npm config set registry https://registry.npm.taobao.org --global

# 查看是否修改成功
npm config get registry
```

## 使用yarn

```bash
# 全局安装 yarn
npm i -g yarn

# 使用 yarn,最好也改一下安装源
yarn config set registry https://registry.npm.taobao.org --global

# 查看是否修改成功
yarn config get registry
```

## 常用的全局包

```bash
npm i -g webpack
npm i -g vue-cli
npm i -g live-server
npm i -g hotel
npm i -g json-server
npm i -g hexo-cli
npm i -g vuepress
```

