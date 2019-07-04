# Yarn常用命令

Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出的包管理工具 ，比 NPM 更快。

## 安装

```bash
# npm 安装
npm i -g yarn

# 修改安装源
yarn config set registry https://registry.npm.taobao.org --global

# 查看是否修改成功
yarn config get registry
```

## 版本

```bash
yarn --version
```

## 初始化一个新项目

```bash
yarn init
```

## 添加依赖包

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

将依赖项添加到不同依赖项类别中

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

## 升级依赖包

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

## 移除依赖包

```bash
yarn remove [package]
```

## 安装项目的全部依赖

```bash
yarn
```

或者

```bash
yarn install
```