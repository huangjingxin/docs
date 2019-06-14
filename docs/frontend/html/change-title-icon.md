# 修改网页标签栏图标

## 原生

```html
<!-- 在 Index.html 中的 Head 标签中加入 -->

<link rel="icon" href="path/to/xxx.jpg" type="image/x-icon">
```

## vue

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

