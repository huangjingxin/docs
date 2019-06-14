# webpack

> 学习 webpack

## why

为什么要 webpack？为什么是 webpack？

1. 前端发展扩张，打包器作用不可少
2. webpack 经营得好，生态也好

## 安装

```bash
npm install webpack webpack-cli --save-dev
```

## 配置

```js
// webpack/webpack.config.js 

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    }
};
```

## 打包

```js
webpack --config webpack/webpack.config.js
```

## loader

loader 是打包器的核心。

### css

```js
// 安装
npm install --save-dev style-loader css-loader

// webpack.config.js
{
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}
```

### file

```js
// 安装
npm install --save-dev file-loader

// webpack.config.js
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}
```

### font

```js
// 安装
npm install --save-dev file-loader

{
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
    ]
}
```

### xml

```js
// 安装
npm install --save-dev xml-loader

// webpack.config.js
{
    test: /\.xml$/,
    use: [
        'xml-loader'
    ]
}
```

## dist

```js
npm install --save-dev html-webpack-plugin clean-webpack-plugin

// webpack/webpack.config.js 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: '管理输出'
    })
],
```

- html-webpack-plugin --- 管理 index.html 输出
- clean-webpack-plugin --- 清理 dist 文件夹

## 热加载

```js
npm install --save-dev webpack-dev-server

// webpack/webpack.config.js 
devServer: {
    contentBase: '../dist'
},
    
// package.js
"scripts": {
    "start": "webpack-dev-server --open --config webpack/webpack.config.js",
    "build": "webpack --config webpack/webpack.config.js"
},
```

## merge

```js
npm install --save-dev webpack-merge

// webpack-base.js
// webpack-dev.js
// webpack-prod.js
```

## 离线存储

```js
// service-work.js
// cache
```











