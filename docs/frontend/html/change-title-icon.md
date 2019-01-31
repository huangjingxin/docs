# 修改网页标签栏图标

在 Index.html 中的 Head 标签中加入

```html
<link rel="icon" href="path/to/xxx.jpg" type="image/x-icon">
```

如果是 Vue ，还需在 build/webpack.dev.conf.js 目录文件下设置

```javascript
# 在 new HtmlWebpackPlugin({}) 加入,跟上面路径一致
favicon:'path/to/xxx.jpg',
```

