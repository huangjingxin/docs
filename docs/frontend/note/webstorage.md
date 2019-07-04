# Web Storage

> 关键词：cookie、sessionStorage、localStorage

## cookie

特性：不能超过 4 KB，有生命周期。占用带宽，不适合访问与修改。

应用场景：验证是否登录，兼容性好

```js
// 创建 后面参数可选（过期时间，指定页面）
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

// 删除 
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

// 读取  使用 split(';') 数组化，然后遍历查找
```

## sessionStorage

特性：大小没有限制，关闭窗口就删除。占用服务器内存。

应用场景：敏感账号一次性登录

```js
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```

## localStorage

特性：不超过 5 MB，永久存在。不能删除，有些场景不适合。

应用场景：常用于长期登录（+ 判断用户是否已登录）

用法与 `session` 一样，关键词改成 `localStorage` 即可。