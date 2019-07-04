# 修改网页标签栏图标

## 原生

```html
<!-- 在 index.html 中的 head 标签中加入 -->

<link rel="icon" href="path/to/xxx.jpg" type="image/x-icon">
```

## Vue

### 开发环境 

```javascript
// build/webpack.dev.conf.js

// 在 new HtmlWebpackPlugin({}) 加入 相对路径
favicon:'src/image/favicon.png',
```

### 生产环境

```js
// build/webpack.prod.conf.js

// 在 new HtmlWebpackPlugin({}) 加入 相对路径
favicon:'src/image/favicon.png',
```

## 大小

一般使用 16×16 大小，当然，肯定是越大越好。下面是常用的大小：

- 16×16（不推荐）
- 32×32
- 64×64
- 128×128

