# 跨域

千山万水，终于走到了这一步。

## 标签跨域

```js
<img src="xxx">
<link href="xxx">
<script src="xxx">
```

上面三个便签是支持跨域加载资源的，但是也需要服务器提供支持才行。

`jsonp` 就是通过 `script` 实现跨域。

